import FormatError from '../errors/formatError'

const formatRobotPosition = (robotPositionLine) => {
  const [xInput, yInput, orientation] = robotPositionLine.split(' ')
  const x = Number(xInput)
  const y = Number(yInput)

  if (
    isNaN(x) ||
    isNaN(y) ||
    typeof orientation !== 'string' ||
    orientation.length !== 1
  )
    throw new FormatError({
      message:
        'Robot position format must be number-whitespace-number-whitespace-1 character string.',
      statusCode: 400
    })

  return { coords: { x, y }, orientation }
}

export default formatRobotPosition
