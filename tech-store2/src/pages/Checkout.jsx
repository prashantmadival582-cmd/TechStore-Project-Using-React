import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

function Checkout() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    payment: "COD",
  });

  // =========================
  // LOAD CART
  // =========================

  useEffect(() => {
    const savedCart = localStorage.getItem("tech-cart");

    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error(
          "Unable to load cart:",
          error
        );
        setCartItems([]);
      }
    }
  }, []);

  // =========================
  // TOTAL ITEMS
  // =========================

  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  // =========================
  // SUBTOTAL
  // =========================

  const subtotal = cartItems.reduce(
    (total, item) =>
      total +
      item.price * item.quantity,
    0
  );

  // Free delivery
  const delivery = 0;

  // Grand total
  const grandTotal =
    subtotal + delivery;

  // =========================
  // HANDLE INPUT
  // =========================

  const handleChange = (event) => {
    const { name, value } =
      event.target;

    setCustomer((previousCustomer) => ({
      ...previousCustomer,
      [name]: value,
    }));
  };

  // =========================
  // PLACE ORDER
  // =========================

  const placeOrder = () => {
    // Check cart
    if (cartItems.length === 0) {
      alert(
        "Your cart is empty. Please add products before checkout."
      );

      navigate("/cart");
      return;
    }

    // Check required fields
    if (
      !customer.name.trim() ||
      !customer.email.trim() ||
      !customer.phone.trim() ||
      !customer.address.trim()
    ) {
      alert(
        "Please fill all required fields."
      );

      return;
    }

    // Basic email validation
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailPattern.test(
        customer.email
      )
    ) {
      alert(
        "Please enter a valid email address."
      );

      return;
    }

    // Basic phone validation
    const phonePattern =
      /^[0-9]{10}$/;

    if (
      !phonePattern.test(
        customer.phone.trim()
      )
    ) {
      alert(
        "Please enter a valid 10-digit phone number."
      );

      return;
    }

    // Create order
    const order = {
      orderId:
        "TS" + Date.now(),

      customer: {
        ...customer,
      },

      items: cartItems,

      totalItems,

      subtotal,

      delivery,

      total: grandTotal,

      date:
        new Date().toLocaleString(
          "en-IN"
        ),
    };

    // Save order
    localStorage.setItem(
      "tech-order",
      JSON.stringify(order)
    );

    // Clear cart
    localStorage.removeItem(
      "tech-cart"
    );

    // Go to success page
    navigate("/success");
  };

  return (
    <div className="checkout-page">

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

          <Link
            to="/cart"
            className="cart-icon"
          >
            ← Back to Cart
          </Link>

        </div>
      </nav>

      {/* =========================
          CHECKOUT CONTAINER
      ========================= */}

      <div className="checkout-container">

        {/* =========================
            CUSTOMER FORM
        ========================= */}

        <div className="checkout-form">

          <h1>
            Checkout
          </h1>

          <p>
            Enter your details to
            complete your order.
          </p>

          {/* Full Name */}

          <label>
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={customer.name}
            onChange={handleChange}
          />

          {/* Email */}

          <label>
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={customer.email}
            onChange={handleChange}
          />

          {/* Phone */}

          <label>
            Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            placeholder="10-digit phone number"
            value={customer.phone}
            onChange={handleChange}
          />

          {/* Address */}

          <label>
            Delivery Address
          </label>

          <textarea
            name="address"
            rows="4"
            placeholder="Enter your complete delivery address"
            value={customer.address}
            onChange={handleChange}
          />

          {/* Payment */}

          <h3>
            Payment Method
          </h3>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              value="COD"
              checked={
                customer.payment ===
                "COD"
              }
              onChange={handleChange}
            />

            <span>
              Cash on Delivery
            </span>
          </label>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              value="UPI"
              checked={
                customer.payment ===
                "UPI"
              }
              onChange={handleChange}
            />

            <span>
              UPI
            </span>
          </label>

          <label className="payment-option">
            <input
              type="radio"
              name="payment"
              value="CARD"
              checked={
                customer.payment ===
                "CARD"
              }
              onChange={handleChange}
            />

            <span>
              Credit / Debit Card
            </span>
          </label>

        </div>

        {/* =========================
            ORDER SUMMARY
        ========================= */}

        <div className="order-summary">

          <h2>
            Order Summary
          </h2>

          {cartItems.length === 0 ? (
            <div className="empty-checkout">
              <p>
                Your cart is empty.
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

              {/* Products */}

              <div className="summary-products">

                {cartItems.map(
                  (item) => (
                    <div
                      key={item.id}
                      className="summary-item"
                    >

                      <span>
                        {item.name}
                        {" × "}
                        {item.quantity}
                      </span>

                      <span>
                        ₹
                        {(
                          item.price *
                          item.quantity
                        ).toLocaleString(
                          "en-IN"
                        )}
                      </span>

                    </div>
                  )
                )}

              </div>

              <hr />

              {/* Items */}

              <div className="summary-row">
                <span>
                  Items
                </span>

                <span>
                  {totalItems}
                </span>
              </div>

              {/* Subtotal */}

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

              {/* Delivery */}

              <div className="summary-row">
                <span>
                  Delivery
                </span>

                <span>
                  FREE
                </span>
              </div>

              <hr />

              {/* Total */}

              <div className="summary-row total">
                <span>
                  Total
                </span>

                <span>
                  ₹
                  {grandTotal.toLocaleString(
                    "en-IN"
                  )}
                </span>
              </div>

              {/* Place Order */}

              <button
                type="button"
                className="checkout-btn"
                onClick={placeOrder}
              >
                Place Order
              </button>

            </>
          )}

        </div>

      </div>
    </div>
  );
}

export default Checkout;