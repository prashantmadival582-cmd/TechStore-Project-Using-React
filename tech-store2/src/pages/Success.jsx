import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Success() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("tech-order");

    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, []);

  if (!order) {
    return (
      <div className="success-page">
        <h2>No order found.</h2>

        <Link to="/" className="checkout-btn">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-icon">✅</div>

        <h1>Order Confirmed!</h1>

        <p>Thank you for shopping with Tech Store.</p>

        <div className="order-details">
          <div className="summary-row">
            <span>Order ID</span>
            <strong>{order.orderId}</strong>
          </div>

          <div className="summary-row">
            <span>Customer</span>
            <strong>{order.customer.name}</strong>
          </div>

          <div className="summary-row">
            <span>Date</span>
            <strong>{order.date}</strong>
          </div>

          <div className="summary-row">
            <span>Payment</span>
            <strong>{order.customer.payment}</strong>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <strong>₹{order.total.toLocaleString("en-IN")}</strong>
          </div>
        </div>

        <p className="delivery-text">
          🚚 Estimated Delivery: 3–5 Business Days
        </p>

        <Link to="/" className="checkout-btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default Success;