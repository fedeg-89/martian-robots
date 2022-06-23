import InstructionError from '../errors/instructionError'
import buildCheckForRobotInCoords from './checks/checkForRobotInCoords'
import buildCheckForScent from './checks/checkForScent'
import buildCheckOutOfGrid from './checks/checkOutOfGrid'
import buildLooseRobot from './looseRobot'
import moveForward from './moveForward'
import turnLeft from './turnLeft'
import turnRight from './turnRight'

export const ORIENTATIONS = ['N', 'E', 'S', 'W']

export const INSTRUCTIONS = {
  R: 'R',
  L: 'L',
  F: 'F'
}

export const MOVES = {
  N: ({ x, y }) => ({ x, y: y + 1 }),
  E: ({ x, y }) => ({ x: x + 1, y }),
  S: ({ x, y }) => ({ x, y: y - 1 }),
  W: ({ x, y }) => ({ x: x - 1, y })
}

const buildGetInstruction =
  ({ grid }) =>
  ({ instruction }) => {
    const checkForScent = buildCheckForScent({ grid })
    const checkOutOfGrid = buildCheckOutOfGrid({ grid })
    const checkForRobotInCoords = buildCheckForRobotInCoords({ grid })
    const looseRobot = buildLooseRobot({ grid })

    const instructions = {
      [INSTRUCTIONS['R']]: turnRight,
      [INSTRUCTIONS['L']]: turnLeft,
      [INSTRUCTIONS['F']]: moveForward({
        checkForScent,
        checkOutOfGrid,
        checkForRobotInCoords,
        looseRobot
      })
    }

    const execInstruction = instructions[instruction]

    if (!execInstruction)
      return new InstructionError({ code: 'NO_INSTRUCTION' })

    return execInstruction
  }

export default buildGetInstruction
