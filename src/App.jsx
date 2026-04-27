import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Products from './components/Products.jsx'
import Reviews from './components/Reviews.jsx'
import Footer from './components/Footer.jsx'
import './App.css'
import { shoes, socks } from './data/products.js'

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <Marquee
          items={[
            'DUNQ PROJECT',
            'EST. 2026',
            'COURT / STREET',
            'LEGACY',
            'RISE ABOVE',
            'BUILT FOR FLIGHT'
          ]}
        />
        <Products
          id="shoes"
          eyebrow="Footwear / 03"
          title="Shoes"
          items={shoes}
          description="Dirancang untuk performa di lapangan — grip kuat, empuk, responsif."
        />
        <Products
          id="socks"
          eyebrow="Accessories / 02"
          title="Socks"
          items={socks}
          description="Kaos kaki basket dengan grip dan kompresi yang dirancang untuk lapangan. Hadir dalam beberapa colorway."
          compact
        />
        <Reviews />
        <Footer />
      </main>
    </div>
  )
}
