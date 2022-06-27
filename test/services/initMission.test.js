import initMission from '../../src/services/initMission'
import examples from '../__mocks__/exampleInput'
const { exampleInput, expectedOutput } = examples

describe('The whole mission flow', () => {
  it('Launch a successful mission', () => {
    const output = initMission(exampleInput)
    expect(output).toEqual(expectedOutput)
  })
})
