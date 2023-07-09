FROM node:16-alpine

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm ci

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]

ENTRYPOINT npm run start:prod