import { ORIENTATIONS } from '.'

const toLeft = ({ orientation }) => {
  const newOrientationIndex = ORIENTATIONS.indexOf(orientation) - 1
  const newOrientation =
    newOrientationIndex === -1
      ? ORIENTATIONS[ORIENTATIONS.length - 1]
      : ORIENTATIONS[newOrientationIndex]

  return newOrientation
}

const turnLeft = ({ robot }) => {
  robot.orientation = toLeft({ orientation: robot.orientation })
}

export default turnLeft
