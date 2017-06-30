//only way express knows this is an error handler is if it has 4 arguments
const errorHandler = (err, request, response, next) => {
  response.status(500).json({   //changes status since won't change automatically
    message: 'uh oh! something is broke'
  });
};

module.exports = errorHandler;
