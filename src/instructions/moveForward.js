import { MOVES } from '.'

const move = ({ robot, newCoords }) => (robot.coords = newCoords)

const buildMoveForward =
  ({ checkForScent, checkOutOfGrid, checkForRobotInCoords, looseRobot }) =>
  ({ robot }) => {
    const isScent = checkForScent({ robot })
    if (isScent) return

    const newCoords = MOVES[robot.orientation](robot.coords)

    const robotInCoord = checkForRobotInCoords({ newCoords })
    if (robotInCoord) return

    const robotOutOfGrid = checkOutOfGrid({ coords: newCoords })
    if (robotOutOfGrid) return looseRobot({ robot })

    move({ robot, newCoords })
  }

export default buildMoveForward
