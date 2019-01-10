FROM ubuntu:18.04

MAINTAINER Luis Rohten luisaugustomelo@gmail.com

RUN apt-get update -yq \
    && apt-get install curl gnupg -yq \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash \
    && apt-get install nodejs -yq

EXPOSE 3000


