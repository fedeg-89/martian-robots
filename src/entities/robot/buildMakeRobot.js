const buildMakeRobot =
  ({ validateRobot }) =>
  ({ coords, orientation, grid }) => {
    validateRobot({ coords, orientation, grid })

    return {
      coords,
      orientation,
      lost: false
    }
  }

export default buildMakeRobot
