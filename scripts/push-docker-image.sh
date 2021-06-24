#!/bin/sh

docker build -t row248/chat-app-backend:latest -f ../
docker push row248/chat-app-backend