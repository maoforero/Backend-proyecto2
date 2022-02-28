function resError (err, req, res, next){
  console.error(err);
  next(err);
}

function errorHandler(err, req, res, next){
  res.status(500).JSON({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHamdler(err, req, res, next){
  if(err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
    next(err);
}


module.exports = { resError, errorHandler }