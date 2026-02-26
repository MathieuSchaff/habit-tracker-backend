import {
  err,
  errorResponse,
  errorToStatus,
  HTTP_STATUS,
  ingredientTagResponseSchema,
  ok,
  successResponse,
  tagErrorMapping,
} from '@habit-tracker/shared'

import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi'

import type { AppEnv } from '../../../app-env'
import { isUniqueViolation } from '../../../lib/helpers'
import { requireJwtAuth } from '../../auth/middleware'
import {
  addTagToIngredient,
  listTagsByIngredient,
  removeTagFromIngredient,
  replaceIngredientTags,
} from '../tags/tags.service'
import { TagError } from '../tags/tags-error'

const ingredientParams = z.object({ ingredientId: z.uuid() })
const ingredientTagParams = z.object({ ingredientId: z.uuid(), tagId: z.uuid() })

const addIngredientTagSchema = z.object({ tagId: z.uuid() })

const replaceIngredientTagsSchema = z.object({ tagIds: z.array(z.uuid()) })

const ingredientTagWithDetailsSchema = ingredientTagResponseSchema.extend({
  tagName: z.string(),
  tagSlug: z.string(),
  tagCategory: z.string().nullable(),
})

const listTagsRoute = createRoute({
  method: 'get',
  path: '/{ingredientId}/tags',
  tags: ['Ingredient Tags'],
  summary: 'List tags for an ingredient',
  request: { params: ingredientParams },
  responses: {
    [HTTP_STATUS.OK]: successResponse(z.array(ingredientTagWithDetailsSchema), 'Tags retrieved'),
    [HTTP_STATUS.BAD_REQUEST]: errorResponse('Invalid ingredient id'),
  },
})

const addTagRoute = createRoute({
  method: 'post',
  path: '/{ingredientId}/tags',
  tags: ['Ingredient Tags'],
  summary: 'Add a tag to an ingredient',
  security: [{ Bearer: [] }],
  request: {
    params: ingredientParams,
    body: { content: { 'application/json': { schema: addIngredientTagSchema } } },
  },
  responses: {
    [HTTP_STATUS.CREATED]: successResponse(ingredientTagResponseSchema, 'Tag added'),
    [HTTP_STATUS.UNAUTHORIZED]: errorResponse('Not authenticated'),
    [HTTP_STATUS.BAD_REQUEST]: errorResponse('Validation error'),
    [HTTP_STATUS.CONFLICT]: errorResponse('Tag already linked to this ingredient'),
  },
})

const removeTagRoute = createRoute({
  method: 'delete',
  path: '/{ingredientId}/tags/{tagId}',
  tags: ['Ingredient Tags'],
  summary: 'Remove a tag from an ingredient',
  security: [{ Bearer: [] }],
  request: { params: ingredientTagParams },
  responses: {
    [HTTP_STATUS.OK]: successResponse(z.null(), 'Tag removed'),
    [HTTP_STATUS.NOT_FOUND]: errorResponse('Tag not linked to this ingredient'),
    [HTTP_STATUS.UNAUTHORIZED]: errorResponse('Not authenticated'),
  },
})

const replaceTagsRoute = createRoute({
  method: 'put',
  path: '/{ingredientId}/tags',
  tags: ['Ingredient Tags'],
  summary: 'Replace all tags for an ingredient',
  security: [{ Bearer: [] }],
  request: {
    params: ingredientParams,
    body: { content: { 'application/json': { schema: replaceIngredientTagsSchema } } },
  },
  responses: {
    [HTTP_STATUS.OK]: successResponse(z.array(ingredientTagResponseSchema), 'Tags replaced'),
    [HTTP_STATUS.UNAUTHORIZED]: errorResponse('Not authenticated'),
    [HTTP_STATUS.BAD_REQUEST]: errorResponse('Validation error'),
  },
})

// ─── App ──────────────────────────────────────────────────

const ingredientTagsApp = new OpenAPIHono<AppEnv>()

ingredientTagsApp.use('*', async (c, next) => {
  if (c.req.method === 'GET') return next()
  return requireJwtAuth(c, next)
})

ingredientTagsApp.onError((error, c) => {
  if (error instanceof TagError) {
    return c.json(err(error.code, error.details), errorToStatus(error.code, tagErrorMapping))
  }
  console.error('Unexpected error:', error)
  return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
})

// ─── Handlers ─────────────────────────────────────────────

export const ingredientTagRoutes = ingredientTagsApp

  .openapi(listTagsRoute, async (c) => {
    const db = c.get('db')
    const { ingredientId } = c.req.valid('param')
    const items = await listTagsByIngredient(db, ingredientId)
    return c.json(ok(items), HTTP_STATUS.OK)
  })

  .openapi(addTagRoute, async (c) => {
    const db = c.get('db')
    const { ingredientId } = c.req.valid('param')
    const { tagId } = c.req.valid('json')

    try {
      const link = await addTagToIngredient(db, ingredientId, tagId)
      if (!link) throw new TagError('database_error')
      return c.json(ok(link), HTTP_STATUS.CREATED)
    } catch (e) {
      if (e instanceof TagError) throw e
      if (isUniqueViolation(e)) throw new TagError('tag_already_exists')
      throw e
    }
  })

  .openapi(removeTagRoute, async (c) => {
    const db = c.get('db')
    const { ingredientId, tagId } = c.req.valid('param')
    const removed = await removeTagFromIngredient(db, ingredientId, tagId)
    if (!removed) throw new TagError('tag_not_found')
    return c.json(ok(null), HTTP_STATUS.OK)
  })

  .openapi(replaceTagsRoute, async (c) => {
    const db = c.get('db')
    const { ingredientId } = c.req.valid('param')
    const { tagIds } = c.req.valid('json')
    const links = await replaceIngredientTags(db, ingredientId, tagIds)
    return c.json(ok(links), HTTP_STATUS.OK)
  })
