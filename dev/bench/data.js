window.BENCHMARK_DATA = {
  "lastUpdate": 1722027847216,
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
            "email": "9387513+outSH@users.noreply.github.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "distinct": true,
          "id": "ecf074c8c6d5ed67eed2e490c653b41aae691c19",
          "message": "feat(ledger-browser): rewrite fabric application\n\n- Rewrite fabric app using MUI components and new database schema.\n- Improve `UITableListing` to support clickable tables.\n- The new app supports the following views:\n  - Dashboard: Shows summary of blocks and transaction recorded in database.\n  - Block list: Full list of blocks\n  - Transaction list: Full list of transactions\n  - Transaction details: Page that shows full transaction information,\n    transaction actions (method calls) and endorsements.\n\nDepends on #3308\nDepends on #3279\n\nSigned-off-by: Michal Bajer <michal.bajer@fujitsu.com>",
          "timestamp": "2024-07-24T18:36:16+02:00",
          "tree_id": "ba27242dff32b811849a51578b97d73ce94d0b08",
          "url": "https://github.com/Yogesh01000100/cacti/commit/ecf074c8c6d5ed67eed2e490c653b41aae691c19"
        },
        "date": 1721846814645,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 595,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 367,
            "range": "±1.32%",
            "unit": "ops/sec",
            "extra": "182 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "michal.bajer@fujitsu.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "committer": {
            "email": "9387513+outSH@users.noreply.github.com",
            "name": "Michal Bajer",
            "username": "outSH"
          },
          "distinct": true,
          "id": "ecf074c8c6d5ed67eed2e490c653b41aae691c19",
          "message": "feat(ledger-browser): rewrite fabric application\n\n- Rewrite fabric app using MUI components and new database schema.\n- Improve `UITableListing` to support clickable tables.\n- The new app supports the following views:\n  - Dashboard: Shows summary of blocks and transaction recorded in database.\n  - Block list: Full list of blocks\n  - Transaction list: Full list of transactions\n  - Transaction details: Page that shows full transaction information,\n    transaction actions (method calls) and endorsements.\n\nDepends on #3308\nDepends on #3279\n\nSigned-off-by: Michal Bajer <michal.bajer@fujitsu.com>",
          "timestamp": "2024-07-24T18:36:16+02:00",
          "tree_id": "ba27242dff32b811849a51578b97d73ce94d0b08",
          "url": "https://github.com/Yogesh01000100/cacti/commit/ecf074c8c6d5ed67eed2e490c653b41aae691c19"
        },
        "date": 1721847651593,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "plugin-ledger-connector-besu_HTTP_GET_getOpenApiSpecV1",
            "value": 682,
            "range": "±2.74%",
            "unit": "ops/sec",
            "extra": "176 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jagpreet.singh.sasan@accenture.com",
            "name": "jagpreetsinghsasan",
            "username": "jagpreetsinghsasan"
          },
          "committer": {
            "email": "petermetz@users.noreply.github.com",
            "name": "Peter Somogyvari",
            "username": "petermetz"
          },
          "distinct": true,
          "id": "9c4d9be8ac7a1608bf15cbaf887ed0836c02f747",
          "message": "build(api-client): generate go client\n\n    Primary Changes\n    ----------------\n    1. Updated package.json file for packages to\n       include the new codegen script\n    2. Added a new dep, replace for string\n       manupulation in package.json\n\nFixes #393\n\nSigned-off-by: jagpreetsinghsasan <jagpreet.singh.sasan@accenture.com>",
          "timestamp": "2024-07-25T14:06:22-07:00",
          "tree_id": "4db60a87b0df4cca6a76f559d461c607d148f604",
          "url": "https://github.com/Yogesh01000100/cacti/commit/9c4d9be8ac7a1608bf15cbaf887ed0836c02f747"
        },
        "date": 1722027844478,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 581,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "178 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 361,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      }
    ]
  }
}