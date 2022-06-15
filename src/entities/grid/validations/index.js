import GridError from '../../../errors/robotError.js'
import validateGridCord from './validateGridCoord'

const validateGrid = ({ x, y }) => {
  const xError = validateGridCord({
    coord: x,
    coordName: 'x'
  })
  const yError = validateGridCord({
    coord: y,
    coordName: 'y'
  })

  if (xError || yError) {
    throw new GridError({
      errors: [xError, yError].filter(Boolean)
    })
  }
}

export default validateGrid
