import { Router } from 'express'
import { LeaderboardEntry } from '../models/leaderboard-entry'

const leaderboardRouter = Router()

leaderboardRouter.get('/', async (_request, response) => {
  const entries = await LeaderboardEntry.find().sort({ rank: 1 }).lean()

  response.json({
    count: entries.length,
    endpoint: '/api/leaderboard/',
    items: entries,
    service: 'leaderboard',
    status: 'ok',
  })
})

export default leaderboardRouter
