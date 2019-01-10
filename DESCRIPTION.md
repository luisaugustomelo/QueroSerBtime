# dojo-puzzle

[![Build Status]]
[![Ava](https://img.shields.io/badge/tested%20with-ava-red.svg)](https://www.npmjs.com/package/ava)
[![GNU Make](https://img.shields.io/badge/Built%20with-GNU%20Make-brightgreen.svg)](https://img.shields.io/badge/Built%20with-GNU%20Make-brightgreen.svg)

> Starter project for building a Node.js server.

## Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/ruanmartinelli/server-starter-typescript/tree/master)

## Requirements

- Node.js 10+

## Dependencies

Main dependencies:

- npm
- Node.js
- atob
- ava
- express
- url-parse
- valid-url

## Get started

Steps to run the repository for the first time:

1. Clone the repo:

```bash
git clone https://github.com/luisaugustomelo/QueroSerBtime.git <NEW_NAME>

cd <NEW_NAME>
```

2. Check Node.js version:

```bash
node -v # Should be v10.0.0+
```

If you have [nvm](https://github.com/creationix/nvm) installed, you can run `nvm use` to switch to version 10.

3. Run:

```bash
make bootstrap
```

_Optional: change the name on the `package.json` file._

## Folder structure

_Some files were omitted for simplicity._

```bash
.
├── src
|  ├── app.js       # Application entry file
|  ├── css          # Css files
|  ├── js           # Js files
|  └── docs         # Docs utilities
└── test
```

## Develop

1. Make changes

Write controllers and routes, install dependencies, etc.

2. Write tests

Remember to use `<>.spec.ts` for test files.

3. Run tests

```bash
make test
```

## Scripts

All useful scripts are present on the Makefile.

## License

MIT © Luis Augusto Melo Rohten
 