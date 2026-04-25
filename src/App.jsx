import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Products from './components/Products.jsx'
import Quote from './components/Quote.jsx'
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
            'RISE ABOVE',
            'BUILT FOR FLIGHT',
            'DUNQ PROJECT',
            'EST. 2026',
            'COURT / STREET',
            'LACE UP'
          ]}
        />
        <Products
          id="shoes"
          eyebrow="Footwear / 03"
          title="Shoes"
          items={shoes}
          description="Setiap pasang DUNQ dirancang untuk performa di lapangan — GripLock untuk traksi, ReactFoam untuk energy return, dan upper breathable supaya kaki tetap nyaman."
        />
        <Products
          id="socks"
          eyebrow="Accessories / 02"
          title="Socks"
          items={socks}
          description="Kaos kaki basket dengan grip dan kompresi yang dirancang untuk lapangan. Hadir dalam beberapa colorway."
          compact
        />
        <Quote
          text="Sed ut perspiciatis unde omnis iste natus error. Gravity is a suggestion. Dunq anyway."
          attribution="Coach, somewhere on a playground"
          variant="inverse"
        />
        <Footer />
      </main>
    </div>
  )
}
