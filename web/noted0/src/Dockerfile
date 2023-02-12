FROM node:16-alpine

RUN mkdir /app
WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8000

CMD node .
