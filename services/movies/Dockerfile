FROM node:10-alpine

WORKDIR /app

ARG NPM_TOKEN  

COPY .npmrc .npmrc

COPY package*.json ./

RUN npm install

RUN rm -f .npmrc

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]