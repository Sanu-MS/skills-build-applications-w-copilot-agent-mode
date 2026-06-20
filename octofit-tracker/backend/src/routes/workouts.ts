import { Router } from 'express'
import { Workout } from '../models/workout'

const workoutsRouter = Router()

workoutsRouter.get('/', async (_request, response) => {
  const workouts = await Workout.find().sort({ createdAt: 1 }).lean()

  response.json({
    count: workouts.length,
    endpoint: '/api/workouts/',
    items: workouts,
    service: 'workouts',
    status: 'ok',
  })
})

export default workoutsRouter
