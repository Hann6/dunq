import { useRef } from 'react'

export default function Products({ id, eyebrow, title, items, description, compact = false }) {
  return (
    <section id={id} className="products">
      <div className="container">
        <div className="products-head">
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="display products-title">
              {title}<span className="dot">.</span>
            </h2>
          </div>
          <p>{description}</p>
        </div>

        <div className={`grid ${compact ? 'compact' : ''}`}>
          {items.map((item, i) => (
            <ProductCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ item, index }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    el.style.setProperty('--mx', `${x}%`)
    el.style.setProperty('--my', `${y}%`)
  }

  return (
    <article ref={ref} className="card" onMouseMove={onMove}>
      <div className="card-inner">
        <div className="card-media">
          <span className="card-badge">{item.badge}</span>
          <span className="card-id">№ {String(index + 1).padStart(2, '0')}</span>
          <img src={`${import.meta.env.BASE_URL}${item.image || 'dummy.png'}`} alt={item.name} />
        </div>

        <div className="card-head">
          <div>
            <h3 className="card-name">{item.name}</h3>
            <p className="card-tagline">{item.tagline}</p>
          </div>
        </div>

        <p className="card-blurb">{item.blurb}</p>

        <div className="card-foot">
          <a
            href={item.shopeeUrl || 'https://shopee.co.id/dunq_project'}
            target="_blank"
            rel="noreferrer"
            className="card-cta"
          >
            Buy on Shopee <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </article>
  )
}
