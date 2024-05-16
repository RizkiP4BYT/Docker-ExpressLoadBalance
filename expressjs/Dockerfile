FROM node:alpine
WORKDIR /app/expressjs
COPY package*.json ./
COPY index.js ./
RUN npm install
EXPOSE 80
CMD [ "node", "." ]