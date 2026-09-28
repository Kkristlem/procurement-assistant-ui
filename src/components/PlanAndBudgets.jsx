import { useSelector, useDispatch } from 'react-redux'
import { setMonths, loadAll } from '../store/store'

export default function PlanAndBudgets() {
  const { plan, budgets, months } = useSelector((s) => s.procurement)
  const dispatch = useDispatch()

  function onMonthsChange(e) {
    const m = Number(e.target.value)
    dispatch(setMonths(m))
    loadAll(dispatch, m)
  }

  return (
    <section>
      <h2>План закупок</h2>
      <select value={months} onChange={onMonthsChange}>
        <option value={1}>1 мес.</option>
        <option value={3}>3 мес.</option>
        <option value={6}>6 мес.</option>
        <option value={12}>12 мес.</option>
      </select>
      {plan && (
        <>
          <p>Итого: {plan.total_cost_rub.toLocaleString('ru-RU')} ₽ (бюджет {plan.budget_limit_rub.toLocaleString('ru-RU')} ₽)</p>
          <ul>
            {plan.items.map((i) => <li key={i.product_id}>{i.product_name}: {i.recommended_qty} {i.unit}</li>)}
          </ul>
        </>
      )}
      <h2>Бюджеты</h2>
      <div style={{ display: 'flex', gap: 8 }}>
        {budgets.map((b) => (
          <div key={b.label} style={{ border: '1px solid #ccc', padding: 8 }}>
            <strong>{b.label}</strong>
            <p>{b.estimated_cost_rub.toLocaleString('ru-RU')} ₽</p>
          </div>
        ))}
      </div>
    </section>
  )
}
