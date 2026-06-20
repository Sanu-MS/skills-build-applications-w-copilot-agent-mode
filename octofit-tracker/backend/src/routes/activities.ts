import { Router } from 'express'
import { Activity } from '../models/activity'

const activitiesRouter = Router()

activitiesRouter.get('/', async (_request, response) => {
  const activities = await Activity.find().sort({ performedAt: -1 }).lean()

  response.json({
    count: activities.length,
    endpoint: '/api/activities/',
    items: activities,
    service: 'activities',
    status: 'ok',
  })
})

export default activitiesRouter
