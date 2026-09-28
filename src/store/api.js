const BASE = 'http://localhost:8000'

async function get(path) {
  const res = await fetch(BASE + path)
  if (!res.ok) throw new Error(path + ' -> ' + res.status)
  return res.json()
}

async function post(path, body) {
  const res = await fetch(BASE + path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  if (!res.ok) throw new Error(path + ' -> ' + res.status)
  return res.json()
}

export const api = {
  products: () => get('/api/catalog/products'),
  plan: (months) => get(`/api/planning/procurement-plan?months=${months}`),
  budgets: () => get('/api/planning/budgets'),
  ask: (question) => post('/api/chat', { question })
}
