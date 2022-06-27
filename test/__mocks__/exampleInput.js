const gridCoords = { x: 5, y: 3 }
const robotsInput = [
  {
    position: { coords: { x: 1, y: 1 }, orientation: 'E' },
    inputInstructions: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F']
  },
  {
    position: { coords: { x: 3, y: 2 }, orientation: 'N' },
    inputInstructions: [
      'F',
      'R',
      'R',
      'F',
      'L',
      'L',
      'F',
      'F',
      'R',
      'R',
      'F',
      'L',
      'L'
    ]
  },
  {
    position: { coords: { x: 0, y: 3 }, orientation: 'W' },
    inputInstructions: ['L', 'L', 'F', 'F', 'F', 'R', 'F', 'L', 'F', 'L']
  }
]

const exampleInput = `5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFRFLFL`

export default { gridCoords, robotsInput, exampleInput }
