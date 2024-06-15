#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "Building the Docker image..."
docker build --no-cache --compress -t pokedex-api .

echo "Running the Docker container with npm start..."
docker run --rm -p 3000:3000 pokedex-api npm start
