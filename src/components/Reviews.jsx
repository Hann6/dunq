import { useEffect, useState } from 'react'
import { reviews } from '../data/reviews.js'

function Stars() {
  return (
    <span className="reviews-stars" aria-label="5 stars">
      {'★★★★★'}
    </span>
  )
}

export default function Reviews() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIdx((i) => (i + 1) % reviews.length), 5000)
    return () => clearInterval(t)
  }, [paused])

  const go = (dir) =>
    setIdx((i) => (i + dir + reviews.length) % reviews.length)
  const active = reviews[idx]

  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews-head">
          <span className="eyebrow">Real reviews · Shopee</span>
          <h2 className="display reviews-title">
            What players<br />
            are <span className="accent">saying.</span>
          </h2>
        </div>

        <div
          className="reviews-stage"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            className="reviews-arrow prev"
            onClick={() => go(-1)}
            aria-label="Previous review"
          >
            <span aria-hidden>←</span>
          </button>
          <button
            type="button"
            className="reviews-arrow next"
            onClick={() => go(1)}
            aria-label="Next review"
          >
            <span aria-hidden>→</span>
          </button>

          <div className="reviews-track">
            {reviews.map((r, i) => (
              <article
                key={r.id}
                className={`review-card ${i === idx ? 'is-active' : ''}`}
                aria-hidden={i !== idx}
              >
                <div className="review-media">
                  <img
                    src={`${import.meta.env.BASE_URL}${r.image}`}
                    alt={r.product}
                  />
                </div>
                <div className="review-body">
                  <Stars />
                  <div className="review-meta">
                    <strong>{r.user}</strong>
                    <span>{r.date} · Variasi: {r.variant}</span>
                  </div>
                  <p className="review-comment">{r.comment}</p>
                  <span className="review-product mono">{r.product}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="reviews-dots" role="tablist" aria-label="Select review">
          {reviews.map((r, i) => (
            <button
              key={r.id}
              type="button"
              role="tab"
              aria-selected={i === idx}
              aria-label={`Review by ${r.user}`}
              className={`reviews-dot ${i === idx ? 'is-active' : ''}`}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
