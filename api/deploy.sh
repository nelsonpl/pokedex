#!/bin/bash

set -e

echo "Building the Docker image..."
docker-compose build

echo "Starting the Docker container with yarn start..."
docker-compose run --rm app start