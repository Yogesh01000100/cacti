window.BENCHMARK_DATA = {
  "lastUpdate": 1720689911653,
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
          "id": "4253d3f75aef3e3e7849c56182ddd67e56f89fb3",
          "message": "fix: the CVEs of braces nth-check vite webpack-dev-middleware - 2024-07\n\n1. We have several high severity CVEs in the project and this intends to\nfix a large batch of them by forcing the resolutions project-wide.\n2. Longer term fix is to upgrade our direct dependencies that will have\nupgraded their own direct and transitive dependencies to non-vulnerable\nversions but while we wait for all the fixes to trickle up through our\ndependency tree we need a solution that avoids having the vulnerable\nversions installed.\n3. This does not fix all the currently vulnerable dependencies of ours\nbecause some of the dependencies have not shipped a fix yet at all and\nin these cases our only other option would be to strip out the library\nand re-implement something from scratch.\n4. The dependencies which did not have a fix available I prefixed with \"x-\"\nin the root package.json's resolutions declaration so that they are there\nat least for reference and as soon as (hopefully soon) the fixes ship\nwe just need to remove the x- prefix to make it available.\n\nSigned-off-by: Peter Somogyvari <peter.somogyvari@accenture.com>",
          "timestamp": "2024-07-10T21:21:27-07:00",
          "tree_id": "585ffa0df680b7c4a797efe0c5b6b7d837d8e4c3",
          "url": "https://github.com/Yogesh01000100/cacti/commit/4253d3f75aef3e3e7849c56182ddd67e56f89fb3"
        },
        "date": 1720689910201,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "cmd-api-server_HTTP_GET_getOpenApiSpecV1",
            "value": 578,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "177 samples"
          },
          {
            "name": "cmd-api-server_gRPC_GetOpenApiSpecV1",
            "value": 358,
            "range": "±1.37%",
            "unit": "ops/sec",
            "extra": "181 samples"
          }
        ]
      }
    ]
  }
}