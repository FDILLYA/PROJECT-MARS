FROM node:20.11.0

RUN mkdir -p /home/app
COPY . /home/app

WORKDIR /home/app

RUN npm install

EXPOSE 5173

CMD ["npm", "run", "dev"]