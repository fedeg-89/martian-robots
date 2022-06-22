const buildCheckForRobotInCoords =
  ({ grid }) =>
  ({ coords: { x, y } }) => {
    const robotInCoords = grid.robotsCoords.some(
      (robotCoords) => robotCoords.x === x && robotCoords.y === y
    )
    return robotInCoords
  }

export default buildCheckForRobotInCoords
