# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app/frontend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the application's source code from your host to your image workspace.
COPY . .

# Make port 5173 available to the world outside this container
EXPOSE 5173

# Run the app
CMD ["npm", "run", "dev"]
