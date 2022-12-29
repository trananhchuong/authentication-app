FROM node:16-alpine
WORKDIR /server

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]