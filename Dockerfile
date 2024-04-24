FROM node:18-alpine as builder
WORKDIR /app

# Host URL
ENV URL=
# YFN website URL
ENV YFN_URL=
# Base url like /roadmap/
ENV BASE_URL=

COPY package.json package-lock.json ./
RUN npm i
COPY . .

# run with build variables
RUN npm run build

ENTRYPOINT ["npm", "run", "serve"]