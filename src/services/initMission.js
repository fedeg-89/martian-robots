import launchMission from './launchMission.js'
import formatLaunchMissionInput from '../formatters/formatLaunchMissionInput'
import formatLaunchMissionOutput from '../formatters/formatLaunchMissionOutput'

const initMission = (input) => {
  const launchMissionInput = formatLaunchMissionInput(input)
  const missionResult = launchMission(launchMissionInput)
  const missionResultFormatted = formatLaunchMissionOutput(missionResult)

  return missionResultFormatted
}

export default initMission
