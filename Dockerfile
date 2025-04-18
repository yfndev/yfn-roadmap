FROM node:18-alpine as builder
WORKDIR /app

# Host URL
ENV URL=https://youngfounders.network
# YFN website URL
ENV YFN_URL=https://youngfounders.network
# Base url like /roadmap/
ENV BASE_URL=/roadmap
# Set production environment
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN apk add --no-cache autoconf automake libtool nasm build-base && \
    npm i && \
    apk del autoconf automake libtool nasm build-base

COPY . .

# run with build variables
RUN npm run build

ENTRYPOINT ["npm", "run", "serve"]