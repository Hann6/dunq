import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" aria-label="DUNQ home">
          <img src={`${import.meta.env.BASE_URL}dunq_logo.jpg`} alt="DUNQ" />
          <span>DUNQ</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#shoes">Shoes</a>
          <a href="#socks">Socks</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}
