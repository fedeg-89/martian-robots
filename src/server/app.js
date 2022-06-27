import express from 'express'
// import cors from 'cors'
import responseError from '../errors/responseError.js'
import missionRouter from './routes/missionRouter.js'

const app = express()

// app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send({ msg: 'Martian Robots Running' }))
app.use('/api/mission', missionRouter)

app.use(responseError)

export default app
