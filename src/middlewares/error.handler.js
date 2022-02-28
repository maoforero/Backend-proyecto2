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

module.exports = { resError, errorHandler }