import buildMakeRobot from './buildMakeRobot.js'
import validateRobot from './validations'

export const ORIENTATIONS = ['N', 'E', 'S', 'W']

const makeRobot = buildMakeRobot({ validateRobot })

export default makeRobot
