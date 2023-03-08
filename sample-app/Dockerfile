FROM node:18-alpine3.16
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . ./
CMD ["npm", "start"]
EXPOSE 3000