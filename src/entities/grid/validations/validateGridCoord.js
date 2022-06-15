import { MAX_GRID_COORD, MIN_GRID_COORD } from '..'

const validateGridCoord = ({ coord, coordName }) => {
  if (coord === null || coord === undefined)
    return `Empty '${coordName}' coordinate.`

  if (coord < MIN_GRID_COORD || coord > MAX_GRID_COORD)
    return `Coord '${coordName}' must be between ${MIN_GRID_COORD} and ${MAX_GRID_COORD}.`
}

export default validateGridCoord
