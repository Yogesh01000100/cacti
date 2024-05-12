import {
  ILoggerOptions,
  JsObjectSigner,
  LogLevelDesc,
  Logger,
} from "@hyperledger/cactus-common";
import { SupportedChain } from "../core/types";
import { ConnectRouter } from "@connectrpc/connect";
import { SATPSession } from "../core/satp-session";
import {
  SATPService,
  SATPServiceType,
} from "../core/stage-services/satp-service";

/**
 * Represents a handler for various stages of the SATP (Secure Asset Transfer Protocol).
 * Handlers implementing this interface must provide mechanisms to setup routes and handle
 * protocol-specific requests based on the stage they are designed for.
 */
export interface SATPHandler {
  setupRouter(router: ConnectRouter): void;
  getHandlerIdentifier(): string;
}

export interface SATPHandlerOptions {
  session: SATPSession;
  serverService: SATPService;
  clientService: SATPService;
  supportedDLTs: SupportedChain[];
  loggerOptions: ILoggerOptions;
}
export { SATPService, SATPServiceType };
