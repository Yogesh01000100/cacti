window.BENCHMARK_DATA = {
  "lastUpdate": 1720629262083,
  "repoUrl": "https://github.com/Yogesh01000100/cacti",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "vramakr2@in.ibm.com",
            "name": "VRamakrishna",
            "username": "VRamakrishna"
          },
          "committer": {
            "email": "vramakr2@in.ibm.com",
            "name": "VRamakrishna",
            "username": "VRamakrishna"
          },
          "distinct": true,
          "id": "6baaf6617b3b5336f938d8f004e2e22679abb87c",
          "message": "chore(cleanup): deleted deprecated files and folders\n\nDeleted 'docs-cactus' and 'weaver/docs' folders.\nEnsured that the latest contents in the above are reflected in the 'docs' folder.\nUpdated MAINTAINERS.md file with contents from 'weaver/MAINTAINERS.md'.\nDeleted unnecessary 'MAINTAINERS.md' and 'CONTRIBUTING.md' in the 'weaver' folder.\nFixed indentations and removed dead code in source files.\nModified GitHub action to test docs build upon change\n\nSigned-off-by: VRamakrishna <vramakr2@in.ibm.com>",
          "timestamp": "2024-07-10T13:59:54+05:30",
          "tree_id": "22f6e35650f86fcb736b82aa083885878ad4f1b9",
          "url": "https://github.com/Yogesh01000100/cacti/commit/6baaf6617b3b5336f938d8f004e2e22679abb87c"
        },
        "date": 1720629259716,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 586,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 356,
            "range": "±1.55%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      }
    ]
  }
}