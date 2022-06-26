import launchMission from '../src/launchMission'

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

it('launch robots to mars', () => {
  const result = launchMission({ gridCoords, robotsInput })

  expect(result[0].coords).toEqual({ x: 1, y: 1 })
  expect(result[0].orientation).toEqual('E')
  expect(result[0].lost).toBe(false)

  expect(result[1].coords).toEqual({ x: 3, y: 3 })
  expect(result[1].orientation).toEqual('N')
  expect(result[1].lost).toBe(true)

  expect(result[2].coords).toEqual({ x: 4, y: 2 })
  expect(result[2].orientation).toEqual('N')
  expect(result[2].lost).toBe(false)
})
