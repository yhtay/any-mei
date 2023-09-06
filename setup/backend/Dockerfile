# Passing a data variable from the Docker-Compose File
ARG node_version

# Setting up a node image
FROM alpine:latest

# Install necessary packages using apk
RUN apk update && apk add \
    git \
    curl

# The location of the where the image will be in
WORKDIR /app

# # Copy package.json and package-lock.json to the container
# COPY package*.json ./

# Implementing the dependencies
# RUN npm install

# Copy the rest of the backend code to the container
COPY . .

# Define the command to start your backend application
CMD ["npm", "start"]