#!/bin/bash
set -e

echo "Building the Docker image..."
docker build -t pokedex-app .

echo "Running the Docker container with npm start..."
docker run --rm -p 4200:4200 pokedex-app npm start
