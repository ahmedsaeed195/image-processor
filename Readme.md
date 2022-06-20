# Image Processor Project

## Table of Contents

-   [Introduction](#introduction)
-   [Getting Started](#getting-started)
-   [API Endpoints](#api-endpoints)
-   [File Structure](#file-structure)
-   [Configurations](#configurations)

## Introduction

The main goal of this project is to create a backend server using [Typescript](https://www.typescriptlang.org/), [Nodejs](https://nodejs.org/) and [Expressjs](https://expressjs.com/), that has the ability to fetch images that are already saved on the server and even resize the image if needed, the application also has the ability to cache requests to speed up the fetching process.

## Getting Started

To initalize the application, all you need to do is to run a simple command right after downloading the files:

```
npm install
```

This command will download all of the necessary packages for the application to run.

The next step would be to create a new `.env` to pass in the environmentvariables of your choice, `.env.example` was included for reference but it only holds the PORT variable for now.

Lastly, you need to start the server at least once before doing anything, so it creates the `thumbs` folder to save the output images, otherwise if this directory is missing, you will face errors

## API Endpoints

Currently there are only 3 endpoints of which only 1 that is actually useful.

## GET

1. [/](#get-)<br/>
2. [/api](#get-api) <br/>
3. [/api/image](#get-api-image)<br/>

### GET /

Simply responds with a message to let you know that the server is running

### GET /api

Simply responds with a message to let you know that the API is working

### GET /api/image

The main endpoint of the application, this endpoint takes in optional query parameters that specify the image name of which you want to fetch, as well as the desired width and height (these two are optional, if missing 1 or both, will use the default image deminisons).

If the same request was sent before during the server session, then it will be fetched from the cache for faster responses, otherwise, the request is processed as usual then stored to cache.

**Parameters**

| Name       |required| Type   | Description                             |
| ---------- |--------| ------ | --------------------------------------- |
| `fileName` |optional| string | The desired image that needs fetching   |
| `width`    |optional| string | The desired width of the fetched image  |
| `height`   |optional| string | The desired height of the fetched image |

**Responses**

```
// Fetched image of desired dimensions
// status code 200
// No body, but file is sent

or

// No query parameters
// status code 200
{
    "message": "This is the image api, please add a query with the file name and the desired width and height if any"
}

or

// width or height params but no fileName was found
// status code 400
{
    "message": "No file name was set"
}

or

// fileName was sent but image was not found
//status code 404
{
    "message": "Image was not found!"
}
```

## File Structure

1. `assets`: This folder contains the folder of the sample images that are being used by the server, any additonal images should be placed in the `images` subfolder, as for the thumbs folder, it is only created when the server starts if it doesn't exist.

2. `spec`: This folder holds the configuration for the [Jasmine](https://jasmine.github.io/) framework.

3. `src`: This the base folder of which all of the Typescript code is written, this is basically the server files as well as test files that are compiled to Javascript code.
    1. `config`: Any general configuration should be kept here, currently we only have the `node_cache.ts` file, which initiates a cache instance to be used by the server on runtime.

    2. `controllers`: Basically holds the controllers which are used by our [API Endpoints](#api-endpoints).
    
    3. `middleware`: Any custom middleware functions are being held under this directory.

    4. `routes`: All API routes are kept in this folder for easier managament.

    5. `tests`: All tests made should be included here, with the same folder structure as the `src` folder to keep things clean, the helpers folder should be used for any additional helpers for [Jasmine](https://jasmine.github.io/).

    6. `utils`: This is where are of the utility functions should be kept to help organize things and make it easier to import them in any file when required.
4. `build`: This is where all of the compiled Javascript code is kept, auto genetrated by TSC, It is a good idea to not touch this folder at all.

5. `node_modules`: Auto generated by npm, stay away from it.

## Configurations

This is project comes pre initialized with [Typescript](https://www.typescriptlang.org/), [Eslint](https://eslint.org/), [Prettier](https://prettier.io/), [Dotenv](https://www.npmjs.com/package/dotenv), [Git](https://git-scm.com/) and [Jasmine](https://jasmine.github.io/).

All of these have their own configurations files which can be found at the root folder (except for Jasmine as discussed earlier).

Dotenv deoesn't really have a configuration file since it is just imported at the `server.ts` file, but you can use a `.env` file to add the desired enviroment variables.

As for Typescript, Eslint and Prettier, their configuration files are named `tsconfig.json`, `.eslintrc` and `.prettierrc` respectively.

Also some premade npm scripts were added to the `package.json` file under the scripts section.

```
"scripts": {
    "start": "node .", //Starts the server from the main execution file ("main": "build/server.js")
    "build": "npx tsc", //Build Typescript code into Javascript code
    "prebuild": "rmdir /s /q build", //Runs before the build command, clears the old build directory
    "prestart": "npm run build", //Runs the build command before starting
    "dev": "nodemon src/server.ts", //Runs nodemon instead of the normal build and run command
    "lint": "eslint --fix src/**/*.ts", //Lint Typescript files
    "prettier": "prettier --config .prettierrc src/**/*.ts --write", //Apply prettier fix
    "test": "npm run build && npx jasmine" //Build then run jasmine tests
  }
```

Scripts can be added or modified here as desired.