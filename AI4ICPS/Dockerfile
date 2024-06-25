# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the current directory contents into the container
COPY . .

# Install project dependencies
RUN npm install

# Build the Docusaurus site
RUN npm run build

# Install a simple static file server
RUN npm install -g serve

# Set the command to run the static file server
CMD ["serve", "-s", "build"]
