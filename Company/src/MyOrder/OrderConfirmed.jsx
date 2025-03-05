import React from 'react';
import './OrderConfirmed.css';
import shop from "../assets/shopbag.gif"

const OrderConfirmed = () => {
  return (
    <div className="o-confirmation-container">
      <div className="o-confirmation-content">
        <div className="o-icon-container">
          <img
            src={shop}
            alt="Order Confirmed Icon"
            className="o-confirmation-icon"
          />
        </div>
        <div className='o-main'><strong>Your order is confirmed</strong></div>
        <div className='o-message'>Thanks for shopping! Your order hasn't shipped yet, but we will send you an email when it's done.</div>
        <div className="o-button-container">
          <button className="view-order-button">View Order</button>
          <button className="back-home-button">Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmed;
