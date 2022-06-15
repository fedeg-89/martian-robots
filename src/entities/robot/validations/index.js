import RobotError from '../../../errors/robotError.js'
import validateRobotCord from './validateRobotCoord'
import validateRobotOrientation from './validateRobotOrientation'
// import validateRobotGrid from './validateRobotGrid'

const validateRobot = ({ coords, orientation, grid }) => {
  // const gridError = validateRobotGrid({ grid }) // TODO: decide where the grid will be received.

  // if (gridError) throw new RobotError({ errors: [gridError] })

  const xError = validateRobotCord({
    coord: coords.x,
    coordName: 'x',
    gridCoord: grid.x
  })
  const yError = validateRobotCord({
    coord: coords.y,
    coordName: 'y',
    gridCoord: grid.y
  })
  const orientationError = validateRobotOrientation({ orientation })

  if (xError || yError || orientationError) {
    throw new RobotError({
      errors: [xError, yError, orientationError].filter(Boolean)
    })
  }
}

export default validateRobot
