FROM node:16

WORKDIR /app

COPY ./package.json .

RUN npm install

COPY . .

RUN npm run compile

EXPOSE 8081

CMD ["npm","run","start"]
