import React from "react";
import "./OrderReview.css";
import { HiHome } from "react-icons/hi2";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaRegFileLines } from "react-icons/fa6";
import { BiSolidEdit } from "react-icons/bi";
import pot from "../assets/Pot.png";

const OrderReview = () => {
  return (
    <div className="order-review">
      <h2>Review Your Order</h2>
      <div className="steps">
        <div className="ra-process">
          <HiHome className="ra-icon" />
          Address
        </div>
        <div>-------------------------------------------</div>
        <div className="ra-process">
          <FaRegCreditCard className="ra-icon" />
          Payment Method
        </div>
        <div>-------------------------------------------</div>
        <div className="ra-process">
          <FaRegFileLines className="ra-icon" />
          Review
        </div>
      </div>

      <div className="estimated-delivery">Estimated delivery: 22 Feb 2022</div>

      <div className="order-items">
        <div className="ra-all-order">
          <img src={pot} alt="pot" />
          <OrderItem
            name="Girls Pink Moana Printed Dress"
            price="$80.00"
            size="S"
          />
        </div>
        <div className="ra-all-order">
          <img src={pot} alt="pot" />
          <OrderItem
            name="Women Textured Handheld Bag"
            price="$80.00"
            size="Regular"
          />
        </div>
        <div className="ra-all-order">
          <img src={pot} alt="pot" />
          <OrderItem
            name="Tailored Cotton Casual Shirt"
            price="$40.00"
            size="M"
          />
        </div>
      </div>

      <ShippingAddress />
      <PaymentMethod />
      <SummaryBox />
    </div>
  );
};

const OrderItem = ({ name, price, size }) => {
  return (
    <div className="order-item">
      <div>{name}</div>
      <div>{price}</div>
      <div>Size: {size}</div>
    </div>
  );
};

const ShippingAddress = () => {
  return (
    <div className="shipping-address">
      <div>
        <strong>Shipping Address</strong>
      </div>
      <div className="ra-ship-name">
        <strong>Robert Fox</strong>
      </div>
      <div className="ra-ship-add">
        4517 Washington Ave, Manchester, Kentucky 39495
        <BiSolidEdit className="ra-edit-btn" />
      </div>
    </div>
  );
};

const PaymentMethod = () => {
  return (
    <div className="payment-method">
      <div>
        <strong>Payment Method</strong>
      </div>
      <div className="ra-pay-detail">
        <strong>Debit Card (.... .... .... ..89)</strong>
        <BiSolidEdit className="ra-edit-btn" />
      </div>
    </div>
  );
};

const SummaryBox = () => {
  return (
    <div className="summary-box">
      <div className="ra-subtotal">
        <div>Subtotal</div>
        <div>$200.00</div>
      </div>
      <div className="ra-discount-tag">Enter Discount Code</div>
      <div className="ra-discount-code">
        <div className="discount">
          <input type="text" placeholder="Enter Code" />
        </div>
        <div className="ra-apply">Apply</div>
      </div>
      <div className="ra-delivery-charge">
        <div>Delivery Charge</div>
        <div>$5.00</div>
      </div>
      <div className="ra-grand-total">
        <div>Grand Total</div>
        <div>$205.00</div>
      </div>
      <button className="place-order-btn">Place Order</button>
    </div>
  );
};

export default OrderReview;
