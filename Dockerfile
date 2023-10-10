FROM public.ecr.aws/docker/library/node:18.16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./

RUN yarn 

# Bundle app source
COPY . .

EXPOSE 8080

CMD [ "yarn", "start" ]