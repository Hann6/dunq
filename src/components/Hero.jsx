export default function Hero() {
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. DUNQ is a basketball
            project stitched from asphalt, hardwood, and Saturday afternoons — three shoes,
            two socks, zero excuses.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#shoes">
              Shop the drop <span aria-hidden>→</span>
            </a>
            <a className="btn btn-ghost" href="#manifesto">
              Read the manifesto
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden>
          <div className="ring" />
          <div className="ring inner" />
          <div className="ring core" />
          <div className="hero-shoe">
            <img src="/dummy.png" alt="" />
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
