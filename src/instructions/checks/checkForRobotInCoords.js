const buildCheckForRobotInCoords =
  ({ grid }) =>
  ({ coords: { x, y } }) => {
    /* Not required, but could be a cool feature :) */
    // const robotInCoords = grid.robotsCoords.some(
    //   (robotCoords) => robotCoords.x === x && robotCoords.y === y
    // )
    // return robotInCoords

    return false
  }

export default buildCheckForRobotInCoords
