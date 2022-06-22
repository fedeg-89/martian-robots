import moveForward from './moveForward'
import turnLeft from './turnLeft'
import turnRight from './turnRight'

const instructions = {
  R: turnRight,
  L: turnLeft,
  F: moveForward
}

export const ORIENTATIONS = ['N', 'E', 'S', 'W']

export const MOVES = {
  N: ({ x, y }) => ({ x, y: y + 1 }),
  E: ({ x, y }) => ({ x: x + 1, y }),
  S: ({ x, y }) => ({ x, y: y - 1 }),
  W: ({ x, y }) => ({ x: x - 1, y })
}

export default instructions
