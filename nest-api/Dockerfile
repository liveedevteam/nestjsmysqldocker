# Stage 1: Build the application
FROM node:18 AS builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Build the application
RUN npm run build

# Stage 2: Setup production environment
FROM node:18

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy built assets from the builder stage
COPY --from=builder /usr/src/app/dist ./dist

# Your app binds to port 3001 so you use the EXPOSE instruction to have it mapped
EXPOSE 3001

CMD ["node", "dist/main"]
