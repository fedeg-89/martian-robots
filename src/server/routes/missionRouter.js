import express from 'express'
const missionRouter = express.Router()

import { initLaunchMission } from '../controllers/missionController.js'

missionRouter.post('/', initLaunchMission)

export default missionRouter
