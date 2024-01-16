FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV DB_NAME=weather
ENV DB_USERNAME=user
ENV DB_PASSWORD=pass
ENV DB_URI=mongodb://127.0.0.1:27017
CMD [ "npm", "run", "start" ]