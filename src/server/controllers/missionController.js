import formatLaunchMissionInput from '../../formatters/formatLaunchMissionInput.js'
import FormatError from '../../errors/formatError.js'
import launchMission from '../../launchMission.js'

const initLaunchMission = (req, res, next) => {
  if (!req.body.input) {
    const error = new FormatError({
      message: 'No input received',
      statusCode: 400
    })
    next(error)
  }
  try {
    const launchMissionInput = formatLaunchMissionInput(req.body.input)
    const missionResult = launchMission(launchMissionInput)
    // const missionResultFormatted = formatLaunchMissionOutput(missionResult)
    res.status(200).json(missionResult)
  } catch (error) {
    next(error)
  }
}

export { initLaunchMission }
