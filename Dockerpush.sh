echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push jsboilerplates/web-angularjs
docker push jsboilerplates/web-angularjs:0.1.0
