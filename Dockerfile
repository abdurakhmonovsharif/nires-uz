FROM node:20-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --no-cache --force
COPY . ./
RUN npm run build
RUN find ./       -type f | xargs gzip -k
#test
FROM nginx
RUN mkdir -p /run/nginx/
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/local/nginx/html/
EXPOSE 80
CMD nginx -g 'daemon off;'
