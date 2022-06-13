export const MIN_GRID_COORD = 1
export const MAX_GRID_COORD = 50

const validateMapCoord = (coord) => {
  if (coord === null || coord === undefined) return 'Empty coordinate.'
  if (coord < MIN_GRID_COORD || coord > MAX_GRID_COORD)
    return `A coordinate point must be between ${MIN_GRID_COORD} and ${MAX_GRID_COORD}.`
}

const makeGrid = ({ x, y }) => {
  const xError = validateMapCoord(x)
  const yError = validateMapCoord(y)

  if (xError || yError)
    throw new Error(
      `Error: ${xError && 'x coord: ' + xError} ${
        yError && 'y coord: ' + yError
      }`
    )

  return Object.freeze({
    x,
    y,
    robotsCoords: [],
    scents: []
  })
}

export default makeGrid
