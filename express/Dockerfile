# Use the official Node.js 22 image as a parent image
# https://hub.docker.com/_/node
FROM node:22-alpine

WORKDIR /app

COPY . .

EXPOSE 3001

CMD ["npm", "run", "docker-dev"]
