import formatGridCoords from './formatGridCoords'
import formatRobotInstructions from './formatRobotInstructions'
import formatRobotPosition from './formatRobotPosition'

const formatLaunchMissionInput = (input) => {
  const inputLines = input.split(/\r?\n/g)
  const gridCoords = formatGridCoords(inputLines[0])
  const robotsInput = []

  for (let index = 1; index < inputLines.length; index = index + 2) {
    const position = formatRobotPosition(inputLines[index])
    const inputInstructions = formatRobotInstructions(inputLines[index + 1])

    robotsInput.push({ position, inputInstructions })
  }

  return { gridCoords, robotsInput }
}

export default formatLaunchMissionInput
