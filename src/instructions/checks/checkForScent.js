const buildCheckForScent =
  ({ grid }) =>
  ({ robot }) => {
    const isScent = grid.scents.some(
      (scent) =>
        scent.coords.x === robot.coords.x &&
        scent.coords.y === robot.coords.y &&
        scent.orientation === robot.orientation
    )

    return isScent
  }

export default buildCheckForScent
