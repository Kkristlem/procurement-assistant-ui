import { configureStore, createSlice } from '@reduxjs/toolkit'
import { api } from './api'

const slice = createSlice({
  name: 'procurement',
  initialState: { products: [], plan: null, budgets: [], months: 3, loading: false },
  reducers: {
    setProducts: (s, a) => { s.products = a.payload },
    setPlan: (s, a) => { s.plan = a.payload },
    setBudgets: (s, a) => { s.budgets = a.payload },
    setMonths: (s, a) => { s.months = a.payload },
    setLoading: (s, a) => { s.loading = a.payload }
  }
})

export const { setProducts, setPlan, setBudgets, setMonths, setLoading } = slice.actions
export const store = configureStore({ reducer: { procurement: slice.reducer } })

export async function loadAll(dispatch, months) {
  dispatch(setLoading(true))
  const [products, plan, budgets] = await Promise.all([
    api.products(),
    api.plan(months),
    api.budgets()
  ])
  dispatch(setProducts(products))
  dispatch(setPlan(plan))
  dispatch(setBudgets(budgets))
  dispatch(setLoading(false))
}
