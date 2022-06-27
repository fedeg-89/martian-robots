import FormatError from '../errors/formatError'

const justUppercaseLettersRegex = /^[A-Z]*$/
const formatRobotInstructions = (robotInstructionsLine) => {
  if (
    !robotInstructionsLine ||
    !justUppercaseLettersRegex.test(robotInstructionsLine)
  )
    throw new FormatError({
      message:
        'Robot instructions format must be all uppercase no-whitespace strings.',
      statusCode: 400
    })

  return robotInstructionsLine.split('')
}

export default formatRobotInstructions
