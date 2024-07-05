window.BENCHMARK_DATA = {
  "lastUpdate": 1720195720881,
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
      }
    ]
  }
}