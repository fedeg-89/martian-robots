class GridError extends Error {
  constructor({ errors }) {
    super()
    this.name = this.constructor.name

    const { message, statusCode } = makeError({ errors })
    this.message = message
    this.statusCode = statusCode
  }
}

function makeError({ errors }) {
  const message = errors.join(' ')
  const statusCode = 400
  return { message, statusCode }
}

export default GridError
