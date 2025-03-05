import React from "react";
import "./MyOrder.css";
import { RiEqualizerLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoBell } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoCardOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import pro from "../assets/profile.jpeg";
import pot from "../assets/pot.png";

const MyOrder = () => {
  const orders = [
    {
      id: 1,
      product: "Girls Pink Moana Printed Dress",
      size: "S",
      qty: 1,
      price: "$80.00",
      status: "Delivered",
      statusStyle: "delivered",
      imageUrl: pot, // Replace with actual image link
    },
    {
      id: 2,
      product: "Women Textured Handheld Bag",
      size: "Regular",
      qty: 1,
      price: "$80.00",
      status: "In Process",
      statusStyle: "in-process",
      imageUrl: pot, // Replace with actual image link
    },
    {
      id: 3,
      product: "Tailored Cotton Casual Shirt",
      size: "M",
      qty: 1,
      price: "$40.00",
      status: "In Process",
      statusStyle: "in-process",
      imageUrl: pot, // Replace with actual image link
    },
  ];

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="header-name">My Profile</div>
        <div className="sidebar">
          <div className="profile-info">
            <img
              className="profile-pic"
              src={pro} // Replace with actual image link
              alt="Profile"
            />
            <div>
              <p>Hello 👋</p>
              <h3>Robert Fox</h3>
            </div>
          </div>
          <ul className="menu">
            <li>
              <CgProfile className="menu-icons" />
              Personal Information
            </li>
            <li className="active">
              <BsBoxSeam className="menu-icons" />
              My Orders
            </li>
            <li>
              <FaRegHeart className="menu-icons" />
              My Wishlists
            </li>
            <li>
              <HiOutlineLocationMarker className="menu-icons" />
              Manage Addresses
            </li>
            <li>
              <IoCardOutline className="menu-icons" />
              Saved Cards
            </li>
            <li>
              <GoBell className="menu-icons" />
              Notifications
            </li>
            <li>
              <IoSettingsOutline className="menu-icons" />
              Settings
            </li>
          </ul>
        </div>
      </div>

      <div className="order-section">
        <div className="search-filter">
          <div className="search-main-box">
            <FiSearch className="search-main-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <button className="filter-btn">
            Filter
            <RiEqualizerLine className="top-filter-icon" />
          </button>
        </div>

        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <div className="product-image">
              <img src={order.imageUrl} />
              <div>
              <p className={`status ${order.statusStyle}`}>{order.status}</p>
              </div>
            </div>
            <div className="order-details">
              <h4>{order.product}</h4>
              <p>Size: {order.size}</p>
              <p>Qty: {order.qty}</p>
            </div>
            <div className="price-status">
              <p className="price">{order.price}</p>
            </div>

            <div className="order-actions">
              <button className="view-order-btn">View Order</button>
              {order.status === "Delivered" ? (
                <button className="review-btn">Write A Review</button>
              ) : (
                <button className="cancel-btn">Cancel Order</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
