import { Hono } from 'hono'
import { cors } from 'hono/cors'

type Bindings = {
  DB: D1Database
  ASSETS: Fetcher // Binding for static assets
}

const app = new Hono<{ Bindings: Bindings }>()

app.use('/api/*', cors())

// --- API ROUTES (The Backend) ---

// 1. GET ALL ITEMS
app.get('/api/items', async (c) => {
  const { results } = await c.env.DB.prepare('SELECT * FROM items ORDER BY id DESC').all()
  return c.json(results)
})

// 2. ADD ITEM
app.post('/api/items', async (c) => {
  const body = await c.req.json()
  const { name, buy, sell } = body
  
  await c.env.DB.prepare(
    'INSERT INTO items (name, buy_price, sell_price) VALUES (?, ?, ?)'
  ).bind(name, buy, sell).run()
  
  return c.json({ success: true }, 201)
})

// 3. DELETE ITEM
app.delete('/api/items/:id', async (c) => {
  const id = c.req.param('id')
  await c.env.DB.prepare('DELETE FROM items WHERE id = ?').bind(id).run()
  return c.json({ success: true })
})

// --- STATIC ASSETS (The Frontend) ---
// If the URL is NOT /api, try to find a file in the assets folder
app.get('/*', async (c) => {
  return await c.env.ASSETS.fetch(c.req.raw)
})

export default app