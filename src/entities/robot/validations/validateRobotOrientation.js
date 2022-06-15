import { ORIENTATIONS } from '..'

const validateRobotOrientation = ({ orientation }) => {
  if (!ORIENTATIONS.includes(orientation))
    return `Orientation must be one of '${ORIENTATIONS.join(', ')}'.`
}

export default validateRobotOrientation
