import { useEffect, useState } from 'react'
import { shoes } from '../data/products.js'

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIdx((i) => (i + 1) % shoes.length), 3000)
    return () => clearInterval(t)
  }, [paused])

  const active = shoes[idx]
  const go = (dir) => setIdx((i) => (i + dir + shoes.length) % shoes.length)

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">DUNQ / SS26 drop 01</span>
          <h1 className="display hero-title">
            Rise<br />
            <span className="stroke">above</span><br />
            the <span className="accent">rim.</span>
          </h1>
          <p className="hero-sub">
            DUNQ is a basketball project stitched from asphalt, hardwood, and Saturday afternoons — three shoes,
            two socks, zero excuses.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href="https://shopee.co.id/dunq_project"
              target="_blank"
              rel="noreferrer"
            >
              Shop on Shopee <span aria-hidden>→</span>
            </a>
            <a className="btn btn-ghost" href="#shoes">
              See the drop
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="ring" aria-hidden />
          <div className="ring inner" aria-hidden />
          <div className="ring core" aria-hidden />

          <button
            type="button"
            className="hero-arrow prev"
            onClick={() => go(-1)}
            aria-label="Previous shoe"
          >
            <span aria-hidden>←</span>
          </button>
          <button
            type="button"
            className="hero-arrow next"
            onClick={() => go(1)}
            aria-label="Next shoe"
          >
            <span aria-hidden>→</span>
          </button>

          <div
            className="hero-shoe"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            role="region"
            aria-label="Shoe carousel"
          >
            {shoes.map((s, i) => (
              <img
                key={s.id}
                src={`${import.meta.env.BASE_URL}dummy.png`}
                alt={s.name}
                className={`hero-shoe-img ${i === idx ? 'is-active' : ''}`}
              />
            ))}

            <div className="hero-shoe-label" aria-live="polite">
              <span className="mono">Now showing</span>
              <strong key={active.id}>{active.name}</strong>
            </div>
          </div>

          <div className="hero-dots" role="tablist" aria-label="Select shoe">
            {shoes.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={i === idx}
                aria-label={s.name}
                className={`hero-dot ${i === idx ? 'is-active' : ''}`}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>

          <div className="hero-stats container">
            <span><strong>03</strong>shoes</span>
            <span><strong>02</strong>socks</span>
            <span><strong>∞</strong>lift</span>
          </div>
        </div>
      </div>
    </section>
  )
}
