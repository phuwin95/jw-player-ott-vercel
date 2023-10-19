FROM public.ecr.aws/docker/library/node:18.16 as build

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
RUN yarn 

# Bundle app source
COPY . .

RUN APP_ENABLED_LANGUAGES=fi,en yarn build

FROM nginx:alpine as prod

COPY --from=build /usr/src/app/build/public /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
