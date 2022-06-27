import FormatError from '../../src/errors/formatError'
import formatLaunchMissionInput from '../../src/formatters/formatLaunchMissionInput'
import examples from '../__mocks__/exampleInput'
const { gridCoords, robotsInput, exampleInput } = examples

describe('Input formatters', () => {
  it('formats the input', () => {
    const inputFormatted = formatLaunchMissionInput(exampleInput)
    expect(inputFormatted).toEqual({ gridCoords, robotsInput })
  })

  it('Throws for bad Grid coords', () => {
    const badGridsCoords = ['3 J', '5', 'fgd', '']

    const doFormatLaunchMissionInput = (badGirdCoords) => {
      formatLaunchMissionInput(badGirdCoords)
    }

    badGridsCoords.forEach((badGirdCoords) => {
      expect(() => doFormatLaunchMissionInput(badGirdCoords)).toThrow(
        FormatError
      )
    })
  })

  it('Throws for bad Robot position', () => {
    const badRobotsPositions = ['3 J 7', '5 5', 'J 7 N', '5 7 9', '']

    const doFormatLaunchMissionInput = (badRobotPosition) => {
      formatLaunchMissionInput(badRobotPosition)
    }

    badRobotsPositions.forEach((badRobotPosition) => {
      const input = `6 7
      ${badRobotPosition}`
      expect(() => doFormatLaunchMissionInput(input)).toThrow(FormatError)
    })
  })

  it('Throws for bad Robot instructions', () => {
    const badRobotsInstructions = ['FFRl', '5', 'F R F', '']

    const doFormatLaunchMissionInput = (badRobotInstruction) => {
      formatLaunchMissionInput(badRobotInstruction)
    }

    badRobotsInstructions.forEach((badRobotInstruction) => {
      const input = `6 7
      2 2 N
      ${badRobotInstruction}`
      expect(() => doFormatLaunchMissionInput(input)).toThrow(FormatError)
    })
  })
})
