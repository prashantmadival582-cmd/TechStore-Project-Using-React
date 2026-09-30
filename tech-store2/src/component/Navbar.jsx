import {
  FaShoppingCart,
  FaHeart,
  FaSearch,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Navbar({
  cartCount = 0,
  wishCount = 0,
  onCartClick,
}) {
  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo">
          Tech<span>Store</span>
        </Link>

        {/* Navigation */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <a href="#products">Products</a>
          <a href="#categories">Categories</a>
        </nav>

        {/* Actions */}
        <div className="nav-actions">

          {/* Search */}
          <a
            href="#products"
            className="icon-btn"
            aria-label="Search products"
          >
            <FaSearch />
          </a>

          {/* Wishlist */}
          <button
            type="button"
            className="icon-btn badge"
            aria-label="Wishlist"
          >
            <FaHeart />

            {wishCount > 0 && (
              <span>{wishCount}</span>
            )}
          </button>

          {/* Cart */}
          <button
            type="button"
            className="icon-btn badge"
            onClick={onCartClick}
            aria-label="Shopping cart"
          >
            <FaShoppingCart />

            {cartCount > 0 && (
              <span>{cartCount}</span>
            )}
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;