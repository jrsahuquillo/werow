FROM node:13.13.0-alpine3.10

WORKDIR /api

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]
