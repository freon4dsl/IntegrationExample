# changes from create freon command

- added index that exports configureExternals()

## package.json
- adjusted dsl/package.json to include the following
```bash
  "main": "index.js",
  "module": "index.js",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "svelte": "./dist/index.js"
    }
  },
```
- changed script 'server' to 
```bash
  "server": "node ../../node_modules/@freon4dsl/server/dist/server/server-starter.js"
```
- removed scripts for 'prepare-app'
- cleaned up the dependencies
