import { Router } from 'express'
import { User } from '../models/user'

const usersRouter = Router()

usersRouter.get('/', async (_request, response) => {
  const users = await User.find().sort({ createdAt: 1 }).lean()

  response.json({
    count: users.length,
    endpoint: '/api/users/',
    items: users,
    service: 'users',
    status: 'ok',
  })
})

export default usersRouter
