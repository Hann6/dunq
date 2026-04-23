export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-mark">DUNQ</div>

        <div className="footer-grid">
          <div className="footer-col footer-about">
            <h4>The Project</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. DUNQ is a small
              basketball project — handmade drops, player-tested, lovingly overbuilt.
            </p>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="#shoes">Shoes</a></li>
              <li><a href="#socks">Socks</a></li>
              <li><a href="#shoes">New arrivals</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow</h4>
            <ul>
              <li><a href="https://www.instagram.com/dunq.project/" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="#">TikTok</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Help</h4>
            <ul>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} DUNQ Project</span>
          <span>Built to fly · Made on earth</span>
        </div>
      </div>
    </footer>
  )
}
