import { MOVES } from '.'

const move = ({ robot, newCoords }) => (robot.coords = newCoords)

const moveForward = ({ robot }) => {
  // const isScent = checkForScent({ robot })
  // if (isScent) return

  const newCoords = MOVES[robot.orientation](robot.coords)

  // const robotOutOfGrid = checkOutOfGrid({ newCoords })
  // if (robotOutOfGrid) return looseRobot({ robot })

  move({ robot, newCoords })
}

export default moveForward
