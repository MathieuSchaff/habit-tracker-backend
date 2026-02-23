import {
  createTagSchema,
  err,
  errorResponse,
  errorToStatus,
  HTTP_STATUS,
  ok,
  productResponseSchema,
  successResponse,
  tagErrorMapping,
  tagResponseSchema,
} from '@habit-tracker/shared'

import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi'

import type { AppEnv } from '../../../app-env'
import { requireJwtAuth } from '../../auth/middleware'
import {
  createTag,
  deleteTag,
  getTagById,
  getTagBySlug,
  listProductsByTag,
  updateTag,
} from './tags.service'
import { TagError } from './tags-error'

const idParam = z.object({ id: z.uuid() })
const slugParam = z.object({ slug: z.string().min(1).max(100) })
const nullData = z.null()

const createTagRoute = createRoute({
  method: 'post',
  path: '/',
  tags: ['Tags'],
  summary: 'Create a new tag',
  security: [{ Bearer: [] }],
  request: {
    body: { content: { 'application/json': { schema: createTagSchema } } },
  },
  responses: {
    [HTTP_STATUS.CREATED]: successResponse(tagResponseSchema, 'Tag created'),
    [HTTP_STATUS.UNAUTHORIZED]: errorResponse('Not authenticated'),
    [HTTP_STATUS.BAD_REQUEST]: errorResponse('Validation error'),
    [HTTP_STATUS.CONFLICT]: errorResponse('Tag already exists'),
  },
})

const getTagRoute = createRoute({
  method: 'get',
  path: '/{id}',
  tags: ['Tags'],
  summary: 'Get a tag by id',
  request: { params: idParam },
  responses: {
    [HTTP_STATUS.OK]: successResponse(tagResponseSchema, 'Tag retrieved'),
    [HTTP_STATUS.NOT_FOUND]: errorResponse('Tag not found'),
    [HTTP_STATUS.BAD_REQUEST]: errorResponse('Invalid id'),
  },
})

const updateTagRoute = createRoute({
  method: 'patch',
  path: '/{id}',
  tags: ['Tags'],
  summary: 'Update a tag',
  security: [{ Bearer: [] }],
  request: {
    params: idParam,
    body: { content: { 'application/json': { schema: createTagSchema } } },
  },
  responses: {
    [HTTP_STATUS.OK]: successResponse(tagResponseSchema, 'Tag updated'),
    [HTTP_STATUS.NOT_FOUND]: errorResponse('Tag not found'),
    [HTTP_STATUS.UNAUTHORIZED]: errorResponse('Not authenticated'),
    [HTTP_STATUS.BAD_REQUEST]: errorResponse('Validation error'),
    [HTTP_STATUS.CONFLICT]: errorResponse('Tag already exists'),
  },
})

const listTagProductsRoute = createRoute({
  method: 'get',
  path: '/{slug}/products',
  tags: ['Tags'],
  summary: 'List products associated with a tag',
  request: { params: slugParam },
  responses: {
    [HTTP_STATUS.OK]: successResponse(z.array(productResponseSchema), 'Products retrieved'),
    [HTTP_STATUS.NOT_FOUND]: errorResponse('Tag not found'),
  },
})

const deleteTagRoute = createRoute({
  method: 'delete',
  path: '/{id}',
  tags: ['Tags'],
  summary: 'Delete a tag',
  security: [{ Bearer: [] }],
  request: { params: idParam },
  responses: {
    [HTTP_STATUS.OK]: successResponse(nullData, 'Tag deleted'),
    [HTTP_STATUS.NOT_FOUND]: errorResponse('Tag not found'),
    [HTTP_STATUS.UNAUTHORIZED]: errorResponse('Not authenticated'),
  },
})

const tagsApp = new OpenAPIHono<AppEnv>()

tagsApp.use('*', async (c, next) => {
  if (c.req.method === 'GET') return next()
  return requireJwtAuth(c, next)
})

tagsApp.onError((error, c) => {
  if (error instanceof TagError) {
    return c.json(err(error.code, error.details), errorToStatus(error.code, tagErrorMapping))
  }
  console.error('Unexpected error:', error)
  return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
})

export const tagRoutes = tagsApp

  .openapi(createTagRoute, async (c) => {
    const db = c.get('db')
    const input = c.req.valid('json')
    const tag = await createTag(db, input)
    return c.json(ok(tag), HTTP_STATUS.CREATED)
  })

  .openapi(getTagRoute, async (c) => {
    const db = c.get('db')
    const { id } = c.req.valid('param')
    const tag = await getTagById(db, id)
    if (!tag) throw new TagError('tag_not_found')
    return c.json(ok(tag), HTTP_STATUS.OK)
  })

  .openapi(updateTagRoute, async (c) => {
    const db = c.get('db')
    const { id } = c.req.valid('param')
    const input = c.req.valid('json')
    const tag = await updateTag(db, id, input)
    return c.json(ok(tag), HTTP_STATUS.OK)
  })

  .openapi(deleteTagRoute, async (c) => {
    const db = c.get('db')
    const { id } = c.req.valid('param')
    const deleted = await deleteTag(db, id)
    if (!deleted) throw new TagError('tag_not_found')
    return c.json(ok(null), HTTP_STATUS.OK)
  })

  .openapi(listTagProductsRoute, async (c) => {
    const db = c.get('db')
    const { slug } = c.req.valid('param')
    const tag = await getTagBySlug(db, slug)
    if (!tag) throw new TagError('tag_not_found')
    const items = await listProductsByTag(db, tag.id)
    return c.json(ok(items), HTTP_STATUS.OK)
  })
