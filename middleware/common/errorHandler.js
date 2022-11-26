const createHttpErrors = require('http-errors');

//not found handler
const notFoundHandler = (req,res,next)=>{
  next(createHttpErrors(404, 'Request content was not found!!'));
}


//default error handler
const errorHandler = (err,req,res,next)=>{
  res.status(err.status || 500);
}


module.exports = {
  notFoundHandler,
  errorHandler
}