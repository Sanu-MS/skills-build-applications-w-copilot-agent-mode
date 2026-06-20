import cors from 'cors'
import express from 'express'

import apiRouter from './routes'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (_request, response) => {
  response.json({
    message: 'OctoFit Tracker API',
    status: 'ok',
  })
})

app.use('/api', apiRouter)

app.use((_request, response) => {
  response.status(404).json({
    error: 'Route not found',
  })
})

export default app