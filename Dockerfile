FROM node:14-alpine 
WORKDIR /app
COPY package*.json ./
RUN npm install --unsafe-perm
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]