const express = require('express');
const server = express();
const port = process.env.PORT || 8080;

//middleware imports
const logger = require('./middleware/logger');
const notFound = require('./middleware/404');

//routers
const weatherRouter = require('./routers/weather.router');

//middleware use
server.use(logger);
server.use(weatherRouter);

//dummy route for testing
server.get('/', (request, response) => {
  response.send('it works!');
});

//placement: has to be under all checks, before .listed which listens for requests
//doesnt test
server.use(notFound);
server.listen(port, () => {
  console.log('Now listening on port: ', port);
});
