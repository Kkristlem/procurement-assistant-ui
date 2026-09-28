import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadAll } from './store/store'
import Catalog from './components/Catalog'
import PlanAndBudgets from './components/PlanAndBudgets'
import Chat from './components/Chat'

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => { loadAll(dispatch, 3) }, [dispatch])

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 24, fontFamily: 'sans-serif' }}>
      <h1>Mountain & Sea Spa — планирование закупок</h1>
      <Catalog />
      <PlanAndBudgets />
      <Chat />
    </div>
  )
}
