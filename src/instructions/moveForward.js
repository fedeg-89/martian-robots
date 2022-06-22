import { MOVES } from '.'

const move = ({ robot, newCoords }) => (robot.coords = newCoords)

const moveForward = ({ robot }) => {
  // validateMoveForward({ robot })

  const newCoords = MOVES[robot.orientation](robot.coords)

  // checkNewCoords(newCoords)

  move({ robot, newCoords })
}

export default moveForward
