const errorResponse = (err, req, res, next) => {
  if (err) {
    console.error('err: ', err.name, err.message)
    console.error('trace: ', err)
    if (!err.statusCode) {
      err.statusCode = 500
    }
    return res.status(err.statusCode).send({
      statusCode: err.statusCode,
      message: err.message
    })
  }
  next()
}

export default errorResponse
