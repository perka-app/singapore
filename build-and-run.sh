#!/bin/bash

# Stop the existing Docker container
docker stop perka-singapore

# Remove the existing Docker container
docker rm perka-singapore

# Rebuild the Docker image
docker build -t perka-singapore:latest .

# Run a new Docker container
docker run --name perka-singapore -d -p 80:80 perka-singapore:latest