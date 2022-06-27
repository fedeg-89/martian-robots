import FormatError from '../errors/formatError'

const formatGridCoords = (gridCoordsLine) => {
  const [xInput, yInput] = gridCoordsLine.split(' ')
  const x = Number(xInput)
  const y = Number(yInput)

  if (isNaN(x) || isNaN(y))
    throw new FormatError({
      message: 'Grid coords format must be number-whitespace-number.',
      statusCode: 400
    })

  return { x, y }
}

export default formatGridCoords
