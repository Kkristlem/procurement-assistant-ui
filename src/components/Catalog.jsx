import { useSelector } from 'react-redux'

export default function Catalog() {
  const products = useSelector((s) => s.procurement.products)
  return (
    <section>
      <h2>Каталог</h2>
      <table>
        <thead><tr><th>Товар</th><th>Категория</th><th>Остаток</th></tr></thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}><td>{p.name}</td><td>{p.category}</td><td>{p.total_stock} {p.unit}</td></tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
