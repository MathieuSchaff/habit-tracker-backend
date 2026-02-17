import { beforeEach, describe, expect, it } from 'bun:test'

import type { Hono } from 'hono'

import type { AppEnv } from '../../app-env'
import { createTestApp } from './createTestApp'

describe('Habits routes', () => {
  let app: Hono<AppEnv>
  let cookie: string

  beforeEach(async () => {
    app = createTestApp()

    const res = await app.request('/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'test@test.com',
        password: 'TestPass123!',
      }),
    })
    // biome-ignore lint: testing
    cookie = res.headers.get('set-cookie')!
  })

  it('should create a habit', async () => {
    const res = await app.request('/habits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: cookie,
      },
      body: JSON.stringify({
        name: 'Drink water',
      }),
    })

    expect(res.status).toBe(201)
  })
})
