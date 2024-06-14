#!/bin/bash
set -e

echo "Building the Docker image..."
docker build -t pokedex-api .

echo "Running the Docker container with npm start..."
docker run --rm -p 3000:3000 pokedex-api npm start
