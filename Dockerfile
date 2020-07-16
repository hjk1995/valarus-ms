FROM node:10
WORKDIR /app
COPY package.json /app
#RUN package-lock.json
RUN rm -rf node_modules
RUN npm install
COPY . /app
CMD node server.js
EXPOSE 3001
