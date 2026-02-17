import { Hono } from 'hono'

import type { AppEnv } from '../../app-env'
import { jwtAuthRoutes } from '../../features/auth/routes'
import { habits } from '../../features/habits/routes'
import { healthRoute } from '../../features/health/routes'
import { profileRoute } from '../../features/profile/routes'
import { testDb } from '../db.test.config'
import { JWT_SECRET, REFRESH_SECRET } from '../helpers/secrets'

export function createTestApp() {
  const app = new Hono<AppEnv>()

  app.use('*', async (c, next) => {
    c.set('db', testDb)
    c.set('env', 'development')
    c.set('jwtSecret', JWT_SECRET)
    c.set('refreshSecret', REFRESH_SECRET)
    await next()
  })

  app
    .route('/auth', jwtAuthRoutes)
    .route('/health', healthRoute)
    .route('/habits', habits)
    .route('/profile', profileRoute)
  return app
}
