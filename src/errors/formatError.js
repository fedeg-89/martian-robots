class FormatError extends Error {
  constructor({ message, statusCode }) {
    super()
    this.name = this.constructor.name

    this.message = message
    this.statusCode = statusCode
  }
}

export default FormatError
