import { ApiServer, ConfigService } from "@hyperledger/cactus-cmd-api-server";
import { Logger, LoggerProvider } from "@hyperledger/cactus-common";
import express, { Response, Request } from "express";
import cors from "cors";
import axios from "axios";
import {
  PluginImportAction,
  PluginImportType,
} from "@hyperledger/cactus-core-api";
import { PluginKeychainMemory } from "@hyperledger/cactus-plugin-keychain-memory";

const log: Logger = LoggerProvider.getOrCreate({
  label: "cacti-node-communication",
  level: "info",
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8000;

const main = async () => {
  app.get("/", (req: Request, res: Response) => {
    log.info("Cacti: Hello");
    res.send("Welcome to node testing!");
  });

  app.listen(PORT, () => {
    log.info(`running on port ${PORT}`);
    console.log(`Running on port: ${PORT}`);
  });

  const configService = new ConfigService();
  const apiServerOptions: any = await configService.newExampleConfig();
  apiServerOptions.configFile = "";
  apiServerOptions.authorizationProtocol = "NONE";

  apiServerOptions.apiPort = 3001;
  apiServerOptions.cockpitPort = 3100;
  apiServerOptions.grpcPort = 5000;
  apiServerOptions.apiTlsEnabled = false;
  apiServerOptions.plugins = [
    {
      packageName: "@hyperledger/cactus-plugin-keychain-memory",
      type: PluginImportType.Remote,
      action: PluginImportAction.Install,
      options: {
        instanceId: "Kid",
        keychainId: "id1",
      },
    },
  ];

  const config = await configService.newExampleConfigConvict(apiServerOptions);

  const apiServer = new ApiServer({
    config: config.getProperties(),
  });

  apiServer.start();
};

const client = async () => {
  const apiClient = new PluginKeychainMemory({
    instanceId: "keychain",
    keychainId: "1",
    logLevel: "info",
  });

  const apiServerUrl = "http://127.0.0.1:3001/api/v1/api-server/healthcheck";

  apiClient.observeSet().subscribe({
    next: async (event) => {
      try {
        const resp = await axios.get(apiServerUrl);
        log.info(
          `Event sent: Key = ${event.key}, Value = ${
            event.value
          }, Response: ${JSON.stringify(resp.data)}`,
        );
      } catch (err) {
        log.error("Error sending event to API server:", err);
      }
    },
    error: (err) => log.error("Error on set event:", err),
  });

  app.post("/set-kcm", async (req: Request, res: Response) => {
    const key = req.body.key;
    const value = req.body.value;
    try {
      await apiClient.set(key, value);
      //log.info("KEY: " + key + " VALUE: " + value);
      res.status(201).end();
    } catch (error) {
      res.status(404).send("error !");
    }
  });

  app.get("/get-kcm/:key", async (req: Request, res: Response) => {
    try {
      const { key } = req.params;
      const response = await apiClient.get(key);
      log.info("Got key–value pair: (" + key + ", " + response + ")");
      res.end(response);
    } catch (err: any) {
      res.status(404).send("error getting key");
    }
  });
};

export async function launchApp(): Promise<void> {
  try {
    await main();
    await client();
    log.info("OK");
  } catch (error) {
    log.info(error);
    process.exit(1);
  }
}

if (require.main === module) {
  launchApp();
}
