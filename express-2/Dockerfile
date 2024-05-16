FROM node:alpine
WORKDIR /app/express-1
COPY package*.json ./
COPY index.js ./
RUN npm install
EXPOSE 80
CMD [ "node", "." ]