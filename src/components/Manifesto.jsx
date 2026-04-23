const points = [
  {
    num: '01',
    title: 'Built for flight',
    body:
      'Lorem ipsum dolor sit amet. Foam that pushes back, plates that flex where you do, soles cut to bite the hardwood.'
  },
  {
    num: '02',
    title: 'Small on purpose',
    body:
      'Consectetur adipiscing elit. Three shoes, two socks. We release what we can stand behind — nothing more, nothing filler.'
  },
  {
    num: '03',
    title: 'Court-tested, street-approved',
    body:
      'Sed do eiusmod tempor. Every silhouette logs hours on blacktop and hardwood before it ships with the DUNQ mark.'
  }
]

export default function Manifesto() {
  return (
    <section id="manifesto" className="manifesto">
      <div className="container manifesto-grid">
        <div>
          <span className="eyebrow">Manifesto / 01</span>
          <h2>
            A project, <em>not</em><br />a brand.
          </h2>
        </div>

        <div className="manifesto-points">
          {points.map((p) => (
            <div key={p.num} className="manifesto-point">
              <span className="num">{p.num}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
