import formatLaunchMissionOutput from '../../src/formatters/formatLaunchMissionOutput'
import examples from '../__mocks__/exampleInput'
const { missionResult, expectedOutput } = examples

describe('Output formatter', () => {
  it('formats the output', () => {
    const output = formatLaunchMissionOutput(missionResult)
    expect(output).toEqual(expectedOutput)
  })
})
