# Use the latest LTS version of Node.js
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application files
COPY . .

# Set CI=false to avoid build issues in non-interactive environments
ENV CI=false

# Build the application
RUN npm run build

# Use Nginx to serve the built application
FROM nginx:latest AS prod

# Copy the build output to Nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]