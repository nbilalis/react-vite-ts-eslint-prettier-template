# Dockerizing a React App - https://tmpl.at/3IBqbrn
# Dockerizing a React Application using NGINX and React-Router | by Connor Kent | Level Up Coding - https://levelup.gitconnected.com/dockerizing-a-react-application-using-nginx-and-react-router-43154cc8e58c
# Configuring Nginx for React Router - https://www.barrydobson.com/post/react-router-nginx/

# Build step / image
# -------------------------------------------------- #

FROM node:18-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install npm
RUN npm install -g npm@8.19.2

# install app dependencies
COPY package.json ./
RUN npm install

# copy app files
COPY . ./

# build the app
RUN npm run build


# Deployment step / image
# -------------------------------------------------- #

FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


# How to use
# -------------------------------------------------- #

## Remove previous build & container
# docker image rm react-template --force
# docker rm react-template-container --force

## Build image
# docker build -t react-template .

## Run the container and remove it after it exits
# docker run -it -d --name react-template-container --rm -p 1337:80 react-template
