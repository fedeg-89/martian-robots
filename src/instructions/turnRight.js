import { ORIENTATIONS } from '.'

const toRight = ({ orientation }) => {
  const newOrientationIndex = ORIENTATIONS.indexOf(orientation) + 1
  const newOrientation = ORIENTATIONS[newOrientationIndex] || ORIENTATIONS[0]

  return newOrientation
}

const turnRight = ({ robot }) => {
  robot.orientation = toRight({ orientation: robot.orientation })
}

export default turnRight
