import launchMission from '../../src/services/launchMission'
import examples from '../__mocks__/exampleInput'
const { gridCoords, robotsInput } = examples

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
