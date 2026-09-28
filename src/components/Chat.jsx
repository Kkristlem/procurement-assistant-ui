import { useState } from 'react'
import { api } from '../store/api'

export default function Chat() {
  const [q, setQ] = useState('')
  const [a, setA] = useState(null)

  async function submit(e) {
    e.preventDefault()
    const res = await api.ask(q)
    setA(res)
  }

  return (
    <section>
      <h2>Чат</h2>
      <form onSubmit={submit}>
        <input value={q} onChange={(e) => setQ(e.target.value)} />
        <button type="submit">Спросить</button>
      </form>
      {a && <p>{a.answer_text}</p>}
    </section>
  )
}
