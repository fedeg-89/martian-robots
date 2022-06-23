import { INSTRUCTIONS } from '../instructions'

class InstructionError extends Error {
  constructor({ code }) {
    super()
    this.name = this.constructor.name

    const { message, statusCode } = makeError({ code })
    this.message = message
    this.statusCode = statusCode
  }
}

function makeError({ code }) {
  const defaultError = {
    message: 'An error ocurred with an instruction.',
    statusCode: 500
  }
  const instructionsText = Object.values(INSTRUCTIONS).join(', ')

  const errors = {
    NO_INSTRUCTION: {
      message: `This instruction is not implemented, try one of: ${instructionsText}.`,
      statusCode: 400
    }
  }

  return errors[code] || defaultError
}

export default InstructionError
