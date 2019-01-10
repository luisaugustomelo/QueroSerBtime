#!/bin/bash

bash -c "sudo apt-get install docker"

bash -c "docker build -t node-server:1.1.0 ."

bash -c "docker run -ti -p 8080:3000 -v $PWD:/volume node-server:1.1.0"