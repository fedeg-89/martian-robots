const buildLooseRobot =
  ({ grid }) =>
  ({ robot }) => {
    const { coords, orientation } = robot
    grid.scents.push({ coords, orientation })
    robot.lost = true
  }

export default buildLooseRobot
