import formatGridCoords from './formatGridCoords.js'
import formatRobotInstructions from './formatRobotInstructions.js'
import formatRobotPosition from './formatRobotPosition.js'

const formatLaunchMissionInput = (input) => {
  const inputLines = input.split(/\n\r?/g)
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
