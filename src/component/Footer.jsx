import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer">
      {/* =========================
          NEWSLETTER BANNER
      ========================= */}
      <div className="footer-newsletter">
        <p className="footer-kicker">NEWSLETTER</p>
        <h2>Stay Updated with us</h2>
        <p>
          Get exclusive offers, product launches, and the latest technology updates.
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            aria-label="Email address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* =========================
          FOOTER MAIN CONTENT
      ========================= */}
      <div className="footer-main">
        {/* Column 1 - Brand + contact */}
        <div className="footer-column brand-column">
          <div className="brand-footer" aria-label="Tech Store logo">
            <span className="brand-tech">Tech</span>
            <span className="brand-store">Store</span>
          </div>

          <p className="brand-text">
            Premium electronics with secure and modern shopping experience.
          </p>

          <ul className="contact-list">
            <li>
              <span className="contact-icon">
                <FaMapMarkerAlt />
              </span>
              Bengaluru, India
            </li>
            <li>
              <span className="contact-icon">
                <FaEnvelope />
              </span>
              <a href="mailto:support@techstore.com">support@techstore.com</a>
            </li>
            <li>
              <span className="contact-icon">
                <FaPhoneAlt />
              </span>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </li>
          </ul>
        </div>

        {/* Column 2 - Shop */}
        <div className="footer-column">
          <h3>Shop</h3>
          <ul className="footer-links">
            <li>
              <a href="#products">
                Smartphones <FaArrowRight />
              </a>
            </li>
            <li>
              <a href="#products">
                Laptops <FaArrowRight />
              </a>
            </li>
            <li>
              <a href="#products">
                Smart Watches <FaArrowRight />
              </a>
            </li>
            <li>
              <a href="#products">
                Earbuds <FaArrowRight />
              </a>
            </li>
            <li>
              <a href="#products">
                Accessories <FaArrowRight />
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Support */}
        <div className="footer-column">
          <h3>Customer Support</h3>
          <ul className="footer-links">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 4 - Follow us + payments */}
        <div className="footer-column">
          <h3>Follow Us</h3>

          <div className="social-list" aria-label="Social media links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>

          <div className="payment-block">
            <p>We Accept</p>
            <div className="payment-list">
              <span className="payment-badge visa">VISA</span>
              <span className="payment-badge mastercard">MC</span>
              <span className="payment-badge paypal">PayPal</span>
              <span className="payment-badge upi">UPI</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          BOTTOM BAR
      ========================= */}
      <div className="footer-bottom">
        <p>© 2026 TechStore. All rights reserved.</p>

        <div className="bottom-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;