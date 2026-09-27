import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Category from "../component/Category";
import ProductCard from "../component/ProductCard";
import Footer from "../component/Footer";

import products from "../data/data";

function Home() {
  // =========================
  // STATES
  // =========================

  const [searchItem, setSearchItem] = useState("");

  const [selectedBrand, setSelectedBrand] =
    useState("All");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("default");

  // CART
  const [cartItems, setCartItems] = useState(() => {
    const savedCart =
      localStorage.getItem("tech-cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  // WISHLIST
  const [wishlist, setWishlist] =
    useState([]);

  // TOAST
  const [toast, setToast] =
    useState("");

  // CART DRAWER
  const [isCartOpen, setIsCartOpen] =
    useState(false);

  // PRODUCT DETAILS MODAL
  const [selectedProduct, setSelectedProduct] =
    useState(null);

  // PRODUCT QUANTITY
  const [quantity, setQuantity] =
    useState(1);


  // =========================
  // SAVE CART TO LOCAL STORAGE
  // =========================

  useEffect(() => {
    localStorage.setItem(
      "tech-cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);


  // =========================
  // BRANDS
  // =========================

  const brands = [
    "All",
    ...new Set(
      products.map(
        (product) => product.brand
      )
    ),
  ];


  // =========================
  // CATEGORIES
  // =========================

  const categories = [
    "All",
    ...new Set(
      products.map(
        (product) => product.category
      )
    ),
  ];


  // =========================
  // CATEGORY EXPLORE
  // =========================

  const handleCategoryExplore = (
    category
  ) => {
    setSelectedCategory(category);
    setSelectedBrand("All");
    setSearchItem("");

    setTimeout(() => {
      document
        .getElementById("products")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };


  // =========================
  // SEARCH
  // =========================

  const handleSearch = (value) => {
    setSearchItem(value);

    setSelectedCategory("All");
  };


  // =========================
  // BRAND FILTER
  // =========================

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);

    setSelectedCategory("All");
  };


  // =========================
  // CATEGORY FILTER
  // =========================

  const handleCategoryFilter = (
    category
  ) => {
    setSelectedCategory(category);

    setSelectedBrand("All");

    setSearchItem("");
  };


  // =========================
  // SORT
  // =========================

  const handleSort = (value) => {
    setSortBy(value);
  };


  // =========================
  // FILTER PRODUCTS
  // =========================

  let filteredProducts =
    products.filter((product) => {
      const searchText =
        searchItem
          .toLowerCase()
          .trim();

      const matchesSearch =
        searchText === "" ||
        product.name
          .toLowerCase()
          .includes(searchText) ||
        product.brand
          .toLowerCase()
          .includes(searchText) ||
        product.category
          .toLowerCase()
          .includes(searchText);

      const matchesBrand =
        selectedBrand === "All" ||
        product.brand ===
          selectedBrand;

      const matchesCategory =
        selectedCategory === "All" ||
        product.category ===
          selectedCategory;

      return (
        matchesSearch &&
        matchesBrand &&
        matchesCategory
      );
    });


  // =========================
  // SORT LOW TO HIGH
  // =========================

  if (sortBy === "low") {
    filteredProducts.sort(
      (a, b) =>
        a.price - b.price
    );
  }


  // =========================
  // SORT HIGH TO LOW
  // =========================

  if (sortBy === "high") {
    filteredProducts.sort(
      (a, b) =>
        b.price - a.price
    );
  }


  // =========================
  // ADD TO CART
  // =========================

  const handleAddToCart = (
    product,
    productQuantity = 1
  ) => {
    setCartItems(
      (previousItems) => {
        const existingItem =
          previousItems.find(
            (item) =>
              item.id === product.id
          );

        if (existingItem) {
          return previousItems.map(
            (item) =>
              item.id === product.id
                ? {
                    ...item,
                    quantity:
                      item.quantity +
                      productQuantity,
                  }
                : item
          );
        }

        return [
          ...previousItems,
          {
            ...product,
            quantity:
              productQuantity,
          },
        ];
      }
    );

    setToast(
      `${product.name} added to cart`
    );

    setTimeout(() => {
      setToast("");
    }, 2000);
  };


  // =========================
  // WISHLIST
  // =========================

  const handleWishlist = (
    productId
  ) => {
    setWishlist(
      (previousWishlist) => {
        if (
          previousWishlist.includes(
            productId
          )
        ) {
          return previousWishlist.filter(
            (id) =>
              id !== productId
          );
        }

        return [
          ...previousWishlist,
          productId,
        ];
      }
    );
  };


  // =========================
  // CART COUNT
  // =========================

  const cartCount =
    cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


  // =========================
  // CART TOTAL
  // =========================

  const cartTotal =
    cartItems.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );


  // =========================
  // CLEAR FILTERS
  // =========================

  const clearFilters = () => {
    setSearchItem("");

    setSelectedBrand("All");

    setSelectedCategory("All");

    setSortBy("default");
  };


  // =========================
  // UI
  // =========================

  return (
    <div className="app">

      {/* =========================
          NAVBAR
      ========================= */}

      <Navbar
        cartCount={cartCount}
        wishCount={wishlist.length}
        onCartClick={() =>
          setIsCartOpen(true)
        }
      />


      {/* =========================
          HERO
      ========================= */}

      <Hero />


      {/* =========================
          CATEGORIES
      ========================= */}

      <Category
        onExplore={
          handleCategoryExplore
        }
      />


      {/* =========================
          PRODUCTS
      ========================= */}

      <section
        className="products-section"
        id="products"
      >

        {/* SECTION TITLE */}

        <div className="section-title">

          <p className="small-title">
            SHOP COLLECTION
          </p>

          <h2>
            Trending Products
          </h2>

          <p>
            Discover our premium
            technology lineup
          </p>

        </div>


        {/* SEARCH */}

        <div className="search-box">

          <span>🔍</span>

          <input
            type="text"
            placeholder="Search products, brands..."
            value={searchItem}
            onChange={(event) =>
              handleSearch(
                event.target.value
              )
            }
          />

        </div>


        {/* BRAND FILTER */}

        <div className="brand-filter">

          {brands.map((brand) => (
            <button
              key={brand}
              className={`brand-btn ${
                selectedBrand === brand
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleBrandFilter(
                  brand
                )
              }
            >
              {brand}
            </button>
          ))}

        </div>


        {/* CATEGORY FILTER */}

        <div className="brand-filter">

          {categories.map(
            (category) => (
              <button
                key={category}
                className={`brand-btn ${
                  selectedCategory ===
                  category
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  handleCategoryFilter(
                    category
                  )
                }
              >
                {category}
              </button>
            )
          )}

        </div>


        {/* SORT */}

        <div className="sort-row">

          <select
            className="sort-select"
            value={sortBy}
            onChange={(event) =>
              handleSort(
                event.target.value
              )
            }
          >

            <option value="default">
              Sort By
            </option>

            <option value="low">
              Price: Low → High
            </option>

            <option value="high">
              Price: High → Low
            </option>

          </select>


          {(searchItem ||
            selectedBrand !==
              "All" ||
            selectedCategory !==
              "All" ||
            sortBy !==
              "default") && (
            <button
              className="clear-filter-btn"
              onClick={
                clearFilters
              }
            >
              Clear Filters
            </button>
          )}

        </div>


        {/* ACTIVE CATEGORY */}

        {selectedCategory !==
          "All" && (
          <div className="active-filter">

            Showing products in:

            <strong>
              {" "}
              {selectedCategory}
            </strong>

          </div>
        )}


        {/* PRODUCTS */}

        {filteredProducts.length >
        0 ? (

          <div className="product-grid">

            {filteredProducts.map(
              (product) => (

                <ProductCard
                  key={product.id}
                  {...product}

                  isWishlisted={wishlist.includes(
                    product.id
                  )}

                  onToggleWishlist={() =>
                    handleWishlist(
                      product.id
                    )
                  }

                  onAddToCart={() =>
                    handleAddToCart(
                      product
                    )
                  }

                  onViewDetails={() => {
                    setSelectedProduct(
                      product
                    );

                    setQuantity(1);
                  }}
                />

              )
            )}

          </div>

        ) : (

          <div className="no-products">

            <h3>
              No products found
            </h3>

            <p>
              Try changing your
              search or filters.
            </p>

            <button
              className="category-btn"
              onClick={
                clearFilters
              }
            >
              Clear Filters
            </button>

          </div>

        )}

      </section>


      {/* =========================
          TOAST
      ========================= */}

      {toast && (
        <div className="toast">
          {toast}
        </div>
      )}


      {/* =========================
          PRODUCT DETAILS MODAL
      ========================= */}

      {selectedProduct && (

        <div
          className="modal-overlay"
          onClick={() =>
            setSelectedProduct(null)
          }
        >

          <div
            className="product-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* CLOSE */}

            <button
              className="close-btn"
              onClick={() =>
                setSelectedProduct(null)
              }
            >
              ✕
            </button>


            {/* IMAGE */}

            <div className="modal-left">

              <img
                src={
                  selectedProduct.image
                }
                alt={
                  selectedProduct.name
                }
              />

            </div>


            {/* DETAILS */}

            <div className="modal-right">

              <p className="modal-brand">
                {
                  selectedProduct.brand
                }
              </p>

              <h2>
                {
                  selectedProduct.name
                }
              </h2>


              {/* RATING */}

              <div className="modal-rating">

                ⭐{" "}
                {
                  selectedProduct.rating
                }{" "}

                (
                {
                  selectedProduct.reviews
                }{" "}
                Reviews)

              </div>


              {/* PRICE */}

              <div className="modal-price">

                <h1>
                  ₹
                  {selectedProduct.price.toLocaleString(
                    "en-IN"
                  )}
                </h1>

                <del>
                  ₹
                  {selectedProduct.originalPrice.toLocaleString(
                    "en-IN"
                  )}
                </del>

              </div>


              {/* DESCRIPTION */}

              <p className="modal-desc">

                Experience premium
                performance with
                powerful hardware,
                excellent battery
                life and elegant
                design.

              </p>


              {/* STORAGE */}

              <h4>
                Storage
              </h4>

              <div className="option-row">

                {selectedProduct.storage.map(
                  (
                    option,
                    index
                  ) => (

                    <button
                      key={option}
                      className={`option ${
                        index === 0
                          ? "active"
                          : ""
                      }`}
                    >
                      {option}
                    </button>

                  )
                )}

              </div>


              {/* COLORS */}

              <h4>
                Colors
              </h4>

              <div className="color-row">

                {selectedProduct.colors.map(
                  (color) => (

                    <span
                      key={color}
                      className="color"
                      title={color}
                    />

                  )
                )}

              </div>


              {/* QUANTITY */}

              <div className="quantity-box">

                <button
                  type="button"
                  onClick={() =>
                    setQuantity(
                      Math.max(
                        1,
                        quantity - 1
                      )
                    )
                  }
                >
                  −
                </button>

                <span>
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity(
                      quantity + 1
                    )
                  }
                >
                  +
                </button>

              </div>


              {/* ADD TO CART */}

              <button
                className="buy-btn"
                onClick={() => {

                  handleAddToCart(
                    selectedProduct,
                    quantity
                  );

                  setSelectedProduct(
                    null
                  );

                }}
              >
                Add to Cart
              </button>

            </div>

          </div>

        </div>

      )}


      {/* =========================
          CART DRAWER
      ========================= */}

      {isCartOpen && (

        <div
          className="drawer-overlay"
          onClick={() =>
            setIsCartOpen(false)
          }
        >

          <div
            className="cart-drawer"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* HEADER */}

            <div className="drawer-header">

              <h2>
                Shopping Cart
              </h2>

              <button
                type="button"
                onClick={() =>
                  setIsCartOpen(false)
                }
              >
                ✕
              </button>

            </div>


            {/* EMPTY CART */}

            {cartItems.length ===
            0 ? (

              <div className="empty-cart">

                <h3>
                  Your cart is empty
                </h3>

                <p>
                  Start shopping
                  your favourite
                  gadgets.
                </p>

              </div>

            ) : (

              <>

                {/* CART ITEMS */}

                <div className="drawer-items">

                  {cartItems.map(
                    (item) => (

                      <div
                        className="drawer-item"
                        key={item.id}
                      >

                        <img
                          src={item.image}
                          alt={item.name}
                        />

                        <div>

                          <h4>
                            {item.name}
                          </h4>

                          <p>
                            Qty:{" "}
                            {
                              item.quantity
                            }
                          </p>

                          <strong>
                            ₹
                            {(
                              item.price *
                              item.quantity
                            ).toLocaleString(
                              "en-IN"
                            )}
                          </strong>

                        </div>

                      </div>

                    )
                  )}

                </div>


                {/* CART FOOTER */}

                <div className="drawer-footer">

                  <h3>
                    ₹
                    {cartTotal.toLocaleString(
                      "en-IN"
                    )}
                  </h3>

                  <Link
                    to="/cart"
                    className="checkout-btn"
                    onClick={() =>
                      setIsCartOpen(
                        false
                      )
                    }
                  >
                    Go to Cart
                  </Link>

                </div>

              </>

            )}

          </div>

        </div>

      )}


      {/* =========================
          FOOTER
      ========================= */}

      <Footer />

    </div>
  );
}

export default Home;