import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaCog,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";

function Navbar({
  cartCount = 0,
  wishCount = 0,
  onCartClick,
  theme = "dark",
  onToggleTheme,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Products", to: "#products" },
    { label: "Categories", to: "#categories" },
    { label: "Deals", to: "#deals" },
  ];

  return (
    <header className="navbar-shell">
      <nav className="navbar" aria-label="Main navigation">
        <div className="nav-inner">
          <Link to="/" className="brand" aria-label="Tech Store home page">
            <span className="brand-tech">Tech</span>
            <span className="brand-store">Store</span>
          </Link>

          <div className="nav-links desktop-nav">
            {navLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className={`nav-link ${label === "Home" ? "active" : ""}`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <label className="search-wrap" aria-label="Search products">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search products..." />
            </label>

            <button
              type="button"
              className="icon-btn"
              aria-label={
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
              onClick={onToggleTheme}
            >
              <FaCog />
            </button>

            <button
              type="button"
              className="icon-btn badge-btn"
              aria-label="Wishlist"
            >
              <FaHeart />
              {wishCount > 0 && <span className="badge-count">{wishCount}</span>}
            </button>

            <button
              type="button"
              className="icon-btn badge-btn"
              aria-label="Shopping cart"
              onClick={onCartClick}
            >
              <FaShoppingCart />
              {cartCount > 0 && <span className="badge-count">{cartCount}</span>}
            </button>

            <button
              type="button"
              className="menu-toggle"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mobile-overlay ${isMenuOpen ? "show" : ""}`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <aside className={`mobile-panel ${isMenuOpen ? "open" : ""}`} aria-label="Mobile menu">
        <div className="mobile-panel-header">
          <span>Menu</span>
          <button
            type="button"
            className="close-menu"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <div className="mobile-nav-links">
          {navLinks.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className={`mobile-nav-link ${label === "Home" ? "active" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <button type="button" className="mobile-action" onClick={onToggleTheme}>
            Theme settings
          </button>

          <button type="button" className="mobile-action" onClick={onCartClick}>
            Cart ({cartCount})
          </button>
        </div>
      </aside>
    </header>
  );
}

export default Navbar;