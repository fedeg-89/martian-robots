import makeGrid from './entities/grid'
import makeRobot from './entities/robot'
import buildGetInstruction from './instructions'

const launchMission = ({ gridCoords, robotsInput }) => {
  const grid = makeGrid({ ...gridCoords })
  const getInstruction = buildGetInstruction({ grid })

  const robotsResults = []

  for (const { position, inputInstructions } of robotsInput) {
    const { coords, orientation } = position
    const robot = makeRobot({ coords, orientation, grid })

    for (const instructionCode of inputInstructions) {
      const execInstruction = getInstruction({ instructionCode })
      if (!execInstruction) continue

      execInstruction({ robot })
      if (robot.lost) break
    }
    robotsResults.push(robot)
  }

  return robotsResults
}

export default launchMission
