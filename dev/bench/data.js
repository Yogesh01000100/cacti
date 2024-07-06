window.BENCHMARK_DATA = {
  "lastUpdate": 1720259454938,
  "repoUrl": "https://github.com/Yogesh01000100/cacti",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "michal.bajer@fujitsu.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "8c030ae9e739a28ff0900f7af27ec0fbbb4b7ff9",
          "message": "feat(fabric-connector): add getChainInfo, improve getBlock output\n\n- Add new method `getChainInfo` for quering chain information from qscc.\n- Add `GetChainInfoEndpointV1` to allow calling `getChainInfo` remotely.\n- Refactor `getBlock` so it can return same custom block formats\n  as `WatchBlocks`. Default remains the same (full decode block).\n  BREAKING CHANGE: It accepts `type` instead of `skipDecode` flag.\n- Move common block formatting logic to `cacti-block-formatters.ts`.\n- Add tests for new features. Move test common to quering `qscc` to single file\n  to increase CI speed.\n\nSigned-off-by: Michal Bajer <michal.bajer@fujitsu.com>",
          "timestamp": "2024-07-04T10:38:37-07:00",
          "tree_id": "bd2aa3e8814245fadefd516c8f9e6c4b73a0644d",
          "url": "https://github.com/Yogesh01000100/cacti/commit/8c030ae9e739a28ff0900f7af27ec0fbbb4b7ff9"
        },
        "date": 1720195718414,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 582,
            "range": "±1.60%",
            "unit": "ops/sec",
            "extra": "179 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 362,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "180 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peter.somogyvari@accenture.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "02efca018a962bbbf480d2d7d98e29bc3879c195",
          "message": "build(docs/examples): add yarn patch to @ionic deps of example frontend\n\n1. The `main` field of the package.json of these two packages were invalid\nbecause the `main` field was set to `bundle.js` but that file is actually\nunder `ngx/bundle.js` within the package directory and therefore the value\nof it originally was invalid that caused warnings in our tooling.\n2. By using the yarn **patch** feature we overcame this problem by modifying\nthe sources of the dependencies in question: `@ionic-native/splash-screen` and\n`@ionic-native/status-bar`\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-07-05T19:29:12-07:00",
          "tree_id": "77847aca1aabd476926837cdbabc3436914f3835",
          "url": "https://github.com/Yogesh01000100/cacti/commit/02efca018a962bbbf480d2d7d98e29bc3879c195"
        },
        "date": 1720259452678,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 587,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 365,
            "range": "±1.46%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      }
    ]
  }
}