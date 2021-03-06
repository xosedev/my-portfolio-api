import { Application } from 'express'
import generalController from './api/controllers/general/router'
import userRouter from './api/controllers/user/router'

export default function routes(app: Application): void {
  app.use('/api/v1/user', userRouter)
  app.use('/api/v1/healthcheck', generalController)
}
