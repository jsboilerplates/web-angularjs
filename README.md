# Boilerplate for AngularJS Web App
[![Build Status](https://travis-ci.org/jsboilerplates/web-angularjs.svg?branch=master)](https://travis-ci.org/jsboilerplates/web-angularjs)
[![codecov](https://codecov.io/gh/jsboilerplates/web-angularjs/branch/master/graph/badge.svg)](https://codecov.io/gh/jsboilerplates/web-angularjs)
[![](https://images.microbadger.com/badges/image/jsboilerplates/web-angularjs.svg)](https://microbadger.com/images/jsboilerplates/web-angularjs)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jsboilerplates/web-angularjs/blob/master/LICENSE)
## Features
- AngularJS, Resource, UI Router, Animate
- Unit Test with Jasmine and Karma
- Gulp, Browsersync, ESLint
- CI with Travis, Docker Build

## Installation

``` bash
# install dependencies
npm install

bower install

```

## Running the tests

``` bash
# run all tests
gulp test
```

## Build and Run

``` bash

# serve with hot reload at localhost:9000
gulp serve

# build for production with minification
gulp build

```

## Docker support

Build docker image

```
bash Dockerbuild.sh
```

Run docker container

```
docker run -d --name webangularjs -p 8000:8000 jsboilerplates/web-angularjs
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/jsboilerplates/web-angularjs/tags).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
