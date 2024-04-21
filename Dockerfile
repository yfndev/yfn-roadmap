FROM node:18-alpine as builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm i
COPY . .

# run with build variables
RUN npm run build

ENTRYPOINT ["npm", "run", "deploy"]
