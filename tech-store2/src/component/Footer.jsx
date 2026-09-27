import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="newsletter">

        <p className="small-title">NEWSLETTER</p>

        <h2>Stay Updated</h2>

        <p>
          Get exclusive offers and the latest technology updates.
        </p>

        <div className="newsletter-box">
          <input
            type="email"
            placeholder="Enter your email"
          />
          <button>Subscribe</button>
        </div>

      </div>

      <div className="footer-content">

        <div>
          <h3>TechStore</h3>
          <p>Premium electronics with modern shopping experience.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="#products">Products</a>
          <a href="#categories">Categories</a>
        </div>

        <div>
          <h4>Follow</h4>

          <div className="socials">
            <FaFacebook />
            <FaInstagram />
            <FaGithub />
            <FaLinkedin />
          </div>
        </div>

      </div>

      <div className="copyright">
        © 2026 TechStore • Built with React + Vite
      </div>
    </footer>
  );
}

export default Footer;