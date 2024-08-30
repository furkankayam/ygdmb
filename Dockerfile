# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Authors
LABEL authors="Mehmet Furkan Kaya <furkan.36kaya@gmail.com>"

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if it exists) to the working directory
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Specify the command to run the application
CMD [ "npm", "run", "dev" ]