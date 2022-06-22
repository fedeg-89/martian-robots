import { MIN_GRID_COORD } from '../../grid'

const validateRobotCord = ({ coord, coordName, gridCoord }) => {
  if (coord === null || coord === undefined)
    return `Empty '${coordName}' coordinate.`
  if (coord < MIN_GRID_COORD || coord > gridCoord)
    return `Coord '${coordName}' must be between ${MIN_GRID_COORD} and ${gridCoord}.`
}

export default validateRobotCord
