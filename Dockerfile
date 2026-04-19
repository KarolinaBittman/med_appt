FROM node:20

WORKDIR /app

COPY server/package*.json ./

RUN npm install

COPY server/ .

EXPOSE 8181

CMD ["node", "index.js"]