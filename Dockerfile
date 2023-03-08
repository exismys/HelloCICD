FROM node:18-alpine3.16
WORKDIR /app
COPY ./sample-app/package*.json ./
RUN npm ci
COPY ./sample-app ./
CMD ["npm", "start"]
EXPOSE 3000