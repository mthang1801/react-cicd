ARG NODE_IMAGE=node:16

FROM ${NODE_IMAGE} as builder 
WORKDIR /usr/src/app 
COPY package.json . 
RUN npm install --force 
COPY . . 
RUN npm run build

FROM nginx:latest as runner 
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 
ENTRYPOINT ["nginx", "-g", "daemon off;"]


