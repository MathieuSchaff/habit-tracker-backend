import {
  createIngredientSchema,
  err,
  errorResponse,
  errorToStatus,
  HTTP_STATUS,
  ingredientEditResponseSchema,
  ingredientErrorMapping,
  ingredientResponseSchema,
  ok,
  productResponseSchema,
  successResponse,
  updateIngredientSchema,
} from '@habit-tracker/shared'

import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi'

import type { AppEnv } from '../../../app-env'
import { requireJwtAuth } from '../../auth/middleware'
import { listProductsByIngredient } from '../product-ingredients/product-ingredients.service'
import { IngredientError } from './ingredients-error'
import {
  createIngredient,
  deleteIngredient,
  getIngredientBySlug,
  listIngredientEdits,
  listIngredients,
  updateIngredient,
} from './service'

const slugParam = z.object({ slug: z.string().min(1).max(100) })
const idParam = z.object({ id: z.uuid() })
const nullData = z.null()

const listIngredientsRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['Ingredients'],
  summary: 'List ingredients with optional category filter',
  request: {
    query: z.object({
      category: z.string().optional(),
      concern: z.string().optional(),
    }),
  },
  responses: {
    [HTTP_STATUS.OK]: successResponse(z.array(ingredientResponseSchema), 'Ingredients retrieved'),
  },
})

const createIngredientRoute = createRoute({
  method: 'post',
  path: '/',
  tags: ['Ingredients'],
  summary: 'Create a new ingredient',
  security: [{ Bearer: [] }],
  request: {
    body: { content: { 'application/json': { schema: createIngredientSchema } } },
  },
  responses: {
    [HTTP_STATUS.CREATED]: successResponse(ingredientResponseSchema, 'Ingredient created'),
    [HTTP_STATUS.UNAUTHORIZED]: errorResponse('Not authenticated'),
    [HTTP_STATUS.BAD_REQUEST]: errorResponse('Validation error'),
    [HTTP_STATUS.CONFLICT]: errorResponse('Ingredient already exists'),
  },
})

const getIngredientRoute = createRoute({
  method: 'get',
  path: '/{slug}',
  tags: ['Ingredients'],
  summary: 'Get an ingredient by slug',
  request: { params: slugParam },
  responses: {
    [HTTP_STATUS.OK]: successResponse(ingredientResponseSchema, 'Ingredient retrieved'),
    [HTTP_STATUS.NOT_FOUND]: errorResponse('Ingredient not found'),
  },
})

const updateIngredientRoute = createRoute({
  method: 'patch',
  path: '/{id}',
  tags: ['Ingredients'],
  summary: 'Update an ingredient',
  security: [{ Bearer: [] }],
  request: {
    params: idParam,
    body: { content: { 'application/json': { schema: updateIngredientSchema } } },
  },
  responses: {
    [HTTP_STATUS.OK]: successResponse(ingredientResponseSchema, 'Ingredient updated'),
    [HTTP_STATUS.NOT_FOUND]: errorResponse('Ingredient not found'),
    [HTTP_STATUS.UNAUTHORIZED]: errorResponse('Not authenticated'),
    [HTTP_STATUS.BAD_REQUEST]: errorResponse('Validation error'),
    [HTTP_STATUS.CONFLICT]: errorResponse('Ingredient already exists'),
  },
})

const deleteIngredientRoute = createRoute({
  method: 'delete',
  path: '/{id}',
  tags: ['Ingredients'],
  summary: 'Delete an ingredient',
  security: [{ Bearer: [] }],
  request: { params: idParam },
  responses: {
    [HTTP_STATUS.OK]: successResponse(nullData, 'Ingredient deleted'),
    [HTTP_STATUS.NOT_FOUND]: errorResponse('Ingredient not found'),
    [HTTP_STATUS.UNAUTHORIZED]: errorResponse('Not authenticated'),
  },
})

const listIngredientEditsRoute = createRoute({
  method: 'get',
  path: '/{slug}/edits',
  tags: ['Ingredients'],
  summary: 'List edit history for an ingredient',
  request: { params: slugParam },
  responses: {
    [HTTP_STATUS.OK]: successResponse(
      z.array(ingredientEditResponseSchema),
      'Edit history retrieved'
    ),
    [HTTP_STATUS.NOT_FOUND]: errorResponse('Ingredient not found'),
  },
})

const listIngredientProductsRoute = createRoute({
  method: 'get',
  path: '/{slug}/products',
  tags: ['Ingredients'],
  summary: 'List products containing this ingredient',
  request: { params: slugParam },
  responses: {
    [HTTP_STATUS.OK]: successResponse(z.array(productResponseSchema), 'Products retrieved'),
    [HTTP_STATUS.NOT_FOUND]: errorResponse('Ingredient not found'),
  },
})

const ingredientsApp = new OpenAPIHono<AppEnv>()

ingredientsApp.use('*', async (c, next) => {
  if (c.req.method === 'GET') return next()
  return requireJwtAuth(c, next)
})

ingredientsApp.onError((error, c) => {
  if (error instanceof IngredientError) {
    return c.json(err(error.code, error.details), errorToStatus(error.code, ingredientErrorMapping))
  }
  console.error('Unexpected error:', error)
  return c.json(err('server_error'), HTTP_STATUS.INTERNAL_SERVER_ERROR)
})

export const ingredientRoutes = ingredientsApp

  .openapi(listIngredientsRoute, async (c) => {
    const db = c.get('db')
    const { category, concern } = c.req.valid('query')
    const items = await listIngredients({ category, concern }, db)
    return c.json(ok(items), HTTP_STATUS.OK)
  })

  .openapi(createIngredientRoute, async (c) => {
    const db = c.get('db')
    const userId = c.get('userId')
    const input = c.req.valid('json')
    const ingredient = await createIngredient(userId, input, db)
    return c.json(ok(ingredient), HTTP_STATUS.CREATED)
  })

  .openapi(getIngredientRoute, async (c) => {
    const db = c.get('db')
    const { slug } = c.req.valid('param')
    const ingredient = await getIngredientBySlug(slug, db)
    return c.json(ok(ingredient), HTTP_STATUS.OK)
  })

  .openapi(updateIngredientRoute, async (c) => {
    const db = c.get('db')
    const { id } = c.req.valid('param')
    const userId = c.get('userId')
    const input = c.req.valid('json')
    const ingredient = await updateIngredient(userId, id, input, undefined, db)
    return c.json(ok(ingredient), HTTP_STATUS.OK)
  })

  .openapi(deleteIngredientRoute, async (c) => {
    const db = c.get('db')
    const { id } = c.req.valid('param')
    await deleteIngredient(id, db)
    return c.json(ok(null), HTTP_STATUS.OK)
  })

  .openapi(listIngredientEditsRoute, async (c) => {
    const db = c.get('db')
    const { slug } = c.req.valid('param')
    const ingredient = await getIngredientBySlug(slug, db)
    const edits = await listIngredientEdits(ingredient.id, db)
    return c.json(ok(edits), HTTP_STATUS.OK)
  })

  .openapi(listIngredientProductsRoute, async (c) => {
    const db = c.get('db')
    const { slug } = c.req.valid('param')
    const ingredient = await getIngredientBySlug(slug, db)
    const items = await listProductsByIngredient(db, ingredient.id)
    return c.json(ok(items), HTTP_STATUS.OK)
  })
