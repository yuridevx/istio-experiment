FROM node:lts-alpine

COPY ./ /app

WORKDIR /app

RUN yarn install

ENTRYPOINT ["node", "-r", "ts-node/register", "server.ts"]

EXPOSE 8090