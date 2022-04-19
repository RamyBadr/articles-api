# Node Articles Api

## Technologies

- [Node.js](https://nodejs.org/en/), [Express](http://expressjs.com/), [Javascript](https://github.com/sorrycc/awesome-javascript), [npm](https://www.npmjs.com/) - core platform
- [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/) - database and schema modeling
- [Joi](https://www.npmjs.com/package/joi), [express-validation](https://www.npmjs.com/package/express-validation) - param validation
- [Consola](https://www.npmjs.com/package/consola), [Logger](https://www.npmjs.com/package/@skarif2/logger) - better console logging stuff
- [ESLint](https://eslint.org/) - check and fix linting of code
- [Jest](https://jestjs.io/) - unit testing javascript code and api
- [apiDoc](http://apidocjs.com/) - documentation for RESTful apis

### **Prerequisites**
- [Node.js](https://nodejs.org/en/) v10.3.0 or higher to support [ES2018](https://node.green/) syntax.
- [MongoDB](https://www.mongodb.com/) v3.0.x or higher [[more](https://mongoosejs.com/docs/compatibility.html)].

### **Initial Setup**
```sh

# Install dependencies
$ npm install

# Setup environment
$ cp .env.example .env

# Start development server
$ npm start

# Watch for file changes
$ npm run start:watch

# Run server in debug mode
$ npm run start:debug
```

### **Testing**
```sh
# Run tests in normal mode
$ npm test

# Run tests in watch mode
$ npm run test:watch

# Generate coverage report for tests
$ npm run test:coverage
```

### **Linting**
```sh
# Lint code using ESLint
$ npm run lint
```

### **Docker**
```sh
# Build docker image
$ docker-compose build

# Start newly built image
$ docker-compose up
```

### **Api Doc**
Inline documentation for RESTful APIs. ApiDoc creates a documentation from API annotations in the source code. [[more](http://apidocjs.com/)]

```sh
# Generate documentation for RESTful Api
$ npm run apidoc
```

## Directory Structure
```txt
+
+---docs
+---src
|   +---__test__
|   +---api
|   |   +---author
|   |   |      author.controller.js
|   |   |      author.model.js
|   |   |      author.param.js
|   |   |      author.route.js

|   |   +---article
|   |   |      article.controller.js
|   |   |      article.model.js
|   |   |      article.param.js
|   |   |      article.route.js

|   +---config
|   |       environment.js
|   |       express.js
|   |       mongoose.js
|   +---libs
|   |       APIError.js
|   |       jwToken.js
|   +---middleware
|   |   index.js
|   |   index.route.js
|   package.json
|   .env
```
