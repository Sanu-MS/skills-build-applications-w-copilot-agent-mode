import { Router } from 'express'
import { Team } from '../models/team'

const teamsRouter = Router()

teamsRouter.get('/', async (_request, response) => {
  const teams = await Team.find().sort({ createdAt: 1 }).lean()

  response.json({
    count: teams.length,
    endpoint: '/api/teams/',
    items: teams,
    service: 'teams',
    status: 'ok',
  })
})

export default teamsRouter
