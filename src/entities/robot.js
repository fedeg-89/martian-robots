import { MIN_GRID_COORD } from './grid'

export const ORIENTATIONS = ['N', 'E', 'S', 'W']

const validateRobotCord = ({ coord, gridCoord }) => {
  if (coord === null || coord === undefined) return 'Empty coordinate.'
  if (coord < MIN_GRID_COORD || coord > gridCoord)
    return `A coordinate point must be between ${MIN_GRID_COORD} and ${gridCoord}.`
}

const validateRobotOrientation = ({ orientation }) => {
  if (!ORIENTATIONS.includes(orientation))
    return `Orientation must be one of '${ORIENTATIONS.join(', ')}'.`
}

const makeRobot =
  (grid) =>
  ({ coords, orientation }) => {
    const xError = validateRobotCord({ coord: coords.x, gridCoord: grid.x })
    const yError = validateRobotCord({ coord: coords.y, gridCoord: grid.y })
    const orientationError = validateRobotOrientation({ orientation })

    if (xError || yError || orientationError)
      throw new Error(
        `Error: ${xError && 'x coord: ' + xError} ${
          yError && 'y coord: ' + yError
        } ${orientationError}`
      )

    return {
      coords,
      orientation,
      lost: false
    }
  }

export default makeRobot
