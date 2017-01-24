FROM mhart/alpine-node:7.4
WORKDIR /opt/app
ADD . /opt/app
RUN apk update
RUN apk add git make gcc g++ python
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm","run","start"]
