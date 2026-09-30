import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Cart() {
  // =========================
  // LOAD CART FROM LOCAL STORAGE
  // =========================

  const [cartItems, setCartItems] = useState(() => {
    const savedCart =
      localStorage.getItem("tech-cart");

    if (!savedCart) {
      return [];
    }

    try {
      return JSON.parse(savedCart);
    } catch (error) {
      console.error(
        "Unable to load cart:",
        error
      );

      return [];
    }
  });


  // =========================
  // SAVE CART TO LOCAL STORAGE
  // =========================

  const saveCart = (updatedCart) => {
    setCartItems(updatedCart);

    localStorage.setItem(
      "tech-cart",
      JSON.stringify(updatedCart)
    );
  };


  // =========================
  // INCREASE QUANTITY
  // =========================

  const increaseQty = (id) => {
    const updatedCart = cartItems.map(
      (item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
    );

    saveCart(updatedCart);
  };


  // =========================
  // DECREASE QUANTITY
  // =========================

  const decreaseQty = (id) => {
    const updatedCart = cartItems
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity - 1,
            }
          : item
      )
      .filter(
        (item) => item.quantity > 0
      );

    saveCart(updatedCart);
  };


  // =========================
  // REMOVE ITEM
  // =========================

  const removeItem = (id) => {
    const updatedCart =
      cartItems.filter(
        (item) => item.id !== id
      );

    saveCart(updatedCart);
  };


  // =========================
  // CLEAR CART
  // =========================

  const clearCart = () => {
    saveCart([]);
  };


  // =========================
  // TOTAL ITEMS
  // =========================

  const totalItems =
    cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );


  // =========================
  // SUBTOTAL
  // =========================

  const subtotal =
    cartItems.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );


  // =========================
  // DELIVERY
  // =========================

  const delivery = 0;


  // =========================
  // GRAND TOTAL
  // =========================

  const grandTotal =
    subtotal + delivery;


  // =========================
  // UI
  // =========================

  return (
    <div className="cart-page">

      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">

        <div className="nav-container">

          <Link
            to="/"
            className="logo"
          >
            Tech<span>Store</span>
          </Link>

          <div className="nav-icons">

            <Link to="/">
              🏠 Home
            </Link>

          </div>

        </div>

      </nav>


      {/* =========================
          CART CONTAINER
      ========================= */}

      <div className="cart-container">

        {/* =========================
            CART HEADER
        ========================= */}

        <div className="cart-header">

          <div>

            <h1>
              🛒 Shopping Cart
            </h1>

            <p>
              {totalItems}{" "}
              {totalItems === 1
                ? "Item"
                : "Items"}
            </p>

          </div>


          {cartItems.length > 0 && (
            <button
              type="button"
              className="clear-cart-btn"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          )}

        </div>


        {/* =========================
            EMPTY CART
        ========================= */}

        {cartItems.length === 0 ? (

          <div className="empty-cart">

            <div className="empty-cart-icon">
              🛒
            </div>

            <h2>
              Your cart is empty
            </h2>

            <p>
              Looks like you haven't
              added anything to your
              cart yet.
            </p>

            <Link
              to="/"
              className="checkout-btn"
            >
              Continue Shopping
            </Link>

          </div>

        ) : (

          <>

            {/* =========================
                CART ITEMS
            ========================= */}

            <div className="cart-items">

              {cartItems.map(
                (item) => (

                  <div
                    className="cart-item-page"
                    key={item.id}
                  >

                    {/* PRODUCT IMAGE */}

                    <div className="cart-product-image">

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                    </div>


                    {/* PRODUCT INFORMATION */}

                    <div className="cart-info">

                      <p className="cart-brand">
                        {item.brand}
                      </p>

                      <h3>
                        {item.name}
                      </h3>

                      <p className="cart-price">
                        ₹
                        {item.price.toLocaleString(
                          "en-IN"
                        )}
                      </p>

                    </div>


                    {/* QUANTITY */}

                    <div className="qty-box">

                      <button
                        type="button"
                        onClick={() =>
                          decreaseQty(
                            item.id
                          )
                        }
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        −
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          increaseQty(
                            item.id
                          )
                        }
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>

                    </div>


                    {/* ITEM TOTAL */}

                    <h3 className="cart-item-total">

                      ₹
                      {(
                        item.price *
                        item.quantity
                      ).toLocaleString(
                        "en-IN"
                      )}

                    </h3>


                    {/* REMOVE */}

                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() =>
                        removeItem(
                          item.id
                        )
                      }
                      aria-label={`Remove ${item.name}`}
                    >
                      ✕
                    </button>

                  </div>

                )
              )}

            </div>


            {/* =========================
                ORDER SUMMARY
            ========================= */}

            <div className="checkout-summary">

              <h2>
                Order Summary
              </h2>


              <div className="summary-row">

                <span>
                  Items
                </span>

                <span>
                  {totalItems}
                </span>

              </div>


              <div className="summary-row">

                <span>
                  Subtotal
                </span>

                <span>
                  ₹
                  {subtotal.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              <div className="summary-row">

                <span>
                  Delivery
                </span>

                <span>
                  FREE
                </span>

              </div>


              <hr />


              <div className="summary-row total">

                <span>
                  Grand Total
                </span>

                <span>
                  ₹
                  {grandTotal.toLocaleString(
                    "en-IN"
                  )}
                </span>

              </div>


              {/* CONTINUE SHOPPING */}

              <Link
                to="/"
                className="continue-shopping-btn"
              >
                ← Continue Shopping
              </Link>


              {/* CHECKOUT */}

              <Link
                to="/checkout"
                className="checkout-btn"
              >
                Proceed to Checkout →
              </Link>

            </div>

          </>

        )}

      </div>

    </div>
  );
}

export default Cart;