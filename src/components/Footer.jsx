import { ShopeeIcon, TikTokIcon, InstagramIcon } from './icons.jsx'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-mark">DUNQ</div>

        <div className="footer-grid">
          <div className="footer-col footer-about">
            <h4>The Project</h4>
            <p>
              DUNQ is a small 
              basketball project — handmade drops, player-tested, lovingly overbuilt.
            </p>
          </div>

          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li>
                <a className="link-icon" href="https://shopee.co.id/dunq_project" target="_blank" rel="noreferrer">
                  <ShopeeIcon /> Shopee
                </a>
              </li>
              <li>
                <a className="link-icon" href="https://www.tiktok.com/@dunqproject.idn" target="_blank" rel="noreferrer">
                  <TikTokIcon /> TikTok
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Follow</h4>
            <ul>
              <li>
                <a className="link-icon" href="https://www.instagram.com/dunq.project/" target="_blank" rel="noreferrer">
                  <InstagramIcon /> Instagram
                </a>
              </li>
              <li>
                <a className="link-icon" href="https://www.tiktok.com/@dunqproject.idn" target="_blank" rel="noreferrer">
                  <TikTokIcon /> TikTok
                </a>
              </li>
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
