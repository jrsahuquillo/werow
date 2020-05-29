FROM node:13.13.0-alpine3.10

WORKDIR /app 

COPY . .

EXPOSE 8080

RUN npm install

CMD ["npm", "run", "dev"]
