FROM node:19-alpine3.16

ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install && npm cache clean --force


RUN npm install knex -g


CMD [ "npm", "run", "start:dev" ]