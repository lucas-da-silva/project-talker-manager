# Welcome to the Talker Manager project repository!

## Introduction
An API was developed for a `CRUD` (**C**reate, **R**ead, **U**pdate, and **D**elete) of speakers (talkers) and some endpoints that will read and write to a file using the `fs` module.

The application was developed using the `Express` framework and the `nodemon` module for development.

## Installation

### Clone the repository
```bash
git clone git@github.com:lucas-da-silva/project-talker-manager.git
```

### Install dependencies
```bash
npm install
```

### Run the application
```bash
npm start
```

### Run the tests
```bash
npm test
```

> Tests are developed by Trybe.

## Aplication
The developed code is inside the directory [`src`](./src/), the created routes are inside the file [`index.js`](./src/index.js).

Speaking of routes, we have the following:

- `GET /talker`: Returns an array with all registered speakers;
- `GET /talker/:id`: Returns an object with the speaker that has the `id` informed in the request URL;
- `POST /login`: Returns an object with the access token;
- `POST /talker`: Registers a new speaker in the `talker.json` file;
- `PUT /talker/:id`: Edits a speaker that has the `id` informed in the request URL;
- `DELETE /talker/:id`: Deletes a speaker that has the `id` informed in the request URL;
- `GET /talker/search?q=searchTerm`: Returns an array with all the speakers that have the `searchTerm` informed as part of some field.

> There are several middlewares that were created to validate the data sent in the requests.

## Technologies used

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [nodemon](https://nodemon.io/)
- [fs](https://nodejs.org/api/fs.html)
