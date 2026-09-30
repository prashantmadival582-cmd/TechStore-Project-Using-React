import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaShoppingCart,
  FaEye,
} from "react-icons/fa";

function ProductCard({
  id,
  name,
  brand,
  image,
  price,
  originalPrice,
  rating,
  reviews,
  isWishlisted,
  onToggleWishlist,
  onAddToCart,
  onViewDetails,
}) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="product-card">
      {/* Discount Badge */}
      {discount > 0 && (
        <span className="discount-badge">
          {discount}% OFF
        </span>
      )}

      {/* Wishlist */}
      <button
        type="button"
        className={`wish-btn ${isWishlisted ? "active" : ""}`}
        onClick={onToggleWishlist}
        aria-label={
          isWishlisted
            ? "Remove from wishlist"
            : "Add to wishlist"
        }
      >
        {isWishlisted ? <FaHeart /> : <FaRegHeart />}
      </button>

      {/* Product Image */}
      <div
        className="product-image"
        onClick={onViewDetails}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            onViewDetails();
          }
        }}
      >
        <img src={image} alt={name} />

        {/* Image Hover Overlay */}
        <div className="image-overlay">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onViewDetails();
            }}
          >
            <FaEye />
            View Details
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="product-info">
        <p className="product-brand">{brand}</p>

        <h3 onClick={onViewDetails}>{name}</h3>

        {/* Rating */}
        <div className="rating">
          <FaStar />
          <span>{rating}</span>

          {reviews && (
            <small>
              ({reviews.toLocaleString()} reviews)
            </small>
          )}
        </div>

        {/* Price */}
        <div className="price-row">
          <h2>₹{price.toLocaleString("en-IN")}</h2>

          {originalPrice && (
            <del>
              ₹{originalPrice.toLocaleString("en-IN")}
            </del>
          )}
        </div>

        {/* Add To Cart */}
        <button
          type="button"
          className="cart-btn"
          onClick={onAddToCart}
        >
          <FaShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;