const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export async function getJSON(path) {
  const res = await fetch(`${BASE_URL}${path}`)
  if (!res.ok) throw new Error(`GET ${path} ${res.status}`)
  return res.json()
}

export async function postJSON(path, body) {
  const res = await fetch(`${BASE_URL}${path}` ,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
  if (!res.ok) throw new Error(`POST ${path} ${res.status}`)
  return res.json()
}

export { BASE_URL }
