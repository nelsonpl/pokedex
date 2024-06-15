
# Pokedex API

## Description

REST API for Pokedex.

## Installation

To install and run this project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/jitterbit/pokedex.git
    cd pokedex/api
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Make sure you are using the correct Node version (as specified in `.nvmrc`):
    ```sh
    nvm use 18.19.1
    ```

## Scripts

The following scripts are available in this project:

- `start`: Start the NestJS application.
    ```sh
    npm start
    ```
- `test:e2e`: Run end-to-end tests.
    ```sh
    npm run test:e2e
    ```
- `deploy`: Deploy the application using the `deploy.sh` script.
    ```sh
    npm run deploy
    ```

To run the tests:
```sh
npm test
```
