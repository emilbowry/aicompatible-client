# ----------------------------------
# STAGE 1: Builder (Compiles React)
# ----------------------------------
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the static site (Webpack)
# This creates the /dist folder
RUN npm run build

# ----------------------------------
# STAGE 2: NGINX (Serves Static Files)
# ----------------------------------
FROM nginx:alpine

# Copy the custom NGINX config we are about to create
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built static files from the builder stage
# (Based on your bash history, webpack outputs to 'dist')
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 (Standard Web Port)
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]