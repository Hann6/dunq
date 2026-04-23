export default function Quote({ text, attribution, variant }) {
  return (
    <section className={`quote ${variant === 'inverse' ? 'inverse' : ''}`}>
      <div className="quote-inner">
        <blockquote>{text}</blockquote>
        {attribution && <cite>— {attribution}</cite>}
      </div>
    </section>
  )
}
