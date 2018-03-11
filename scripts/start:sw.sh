#!/usr/bin/env bash

set -ex
ng build -prod --output-path dist/html
docker-compose --file docker/local-nginx-compose.yml up -d --remove-orphans
docker-compose --file docker/local-nginx-compose.yml logs -f -t &
P=$!
trap "kill $P" INT
nodemon --exec 'ng build -prod --output-path dist/html'
docker-compose --file docker/local-nginx-compose.yml down
wait
