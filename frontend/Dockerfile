FROM node 

WORKDIR /another-hour-frontend

COPY package.json /another-hour-frontend

RUN npm install

COPY . /another-hour-frontend

EXPOSE 4000

CMD ["npm","run","dev"]