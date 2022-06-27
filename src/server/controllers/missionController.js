import FormatError from '../../errors/formatError.js'
import initMission from '../../services/initMission.js'

const initLaunchMission = (req, res, next) => {
  if (!req.body.input) {
    const error = new FormatError({
      message: 'No input received',
      statusCode: 400
    })
    next(error)
  }
  try {
    const output = initMission(req.body.input)
    res.status(200).json({ output })
  } catch (error) {
    next(error)
  }
}

export { initLaunchMission }
