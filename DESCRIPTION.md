# dojo-puzzle

[![Ava](https://img.shields.io/badge/tested%20with-ava-red.svg)](https://www.npmjs.com/package/ava)
[![GNU Make](https://img.shields.io/badge/Built%20with-GNU%20Make-brightgreen.svg)](https://img.shields.io/badge/Built%20with-GNU%20Make-brightgreen.svg)

> Starter project for building a Dojo Puzzle in Node.js.

## Deploy

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/luisaugustomelo/QueroSerBtime/tree/master)

## Requirements

- Node.js 10+

## Dependencies

Main dependencies:

- npm
- node.js
- atob
- ava
- express
- url-parse
- valid-url

## Get started with Docker

Steps to run the repository for the first time:

1. Clone the repo:

```bash
git clone https://github.com/luisaugustomelo/QueroSerBtime.git <NEW_NAME>

cd <NEW_NAME>
```

2. Giving permission to the bash file:

```bash
sudo chmod +x ./start.sh # set permission 
```

3. Run out of root mode:

```bash
./start.sh # check if docker is installed, otherwise execute apt-get of the docker
```

4. You need put password of root

The application will start the install mode, execute the docker functions and the browser will open firefox (hopefully it has installed :smile: ).


## Get started without Docker

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
node app.js
```
ou 

```bash
npm start
```

_Optional: change the name on the `package.json` file._

## Folder structure

_Some files were omitted for simplicity._

```bash
.
├── src
|  ├── css          # Css files
|  ├── js           # Js files
|  └── docs         # Docs utilities
└── test
├── src app.js       # Application entry file
```

## Develop

1. Make changes

Write routes, install dependencies, etc.

2. Run tests

```bash
npm test
```

## License

MIT © Luis Augusto Melo Rohten
 