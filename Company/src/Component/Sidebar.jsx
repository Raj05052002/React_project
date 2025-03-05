import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`sidenav ${isHovered ? "expanded" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul className="sidenav-menu">
        <li className="sidenav-item">
          <span className="icon">📑</span>
          {isHovered && <span className="text">Top Stories</span>}
        </li>
        <li className="sidenav-item">
          <span className="icon">⭐</span>
          {isHovered && <span className="text">India</span>}
        </li>
        <li className="sidenav-item">
          <span className="icon">🌐</span>
          {isHovered && <span className="text">World</span>}
        </li>
        <li className="sidenav-item">
          <span className="icon">🎬</span>
          {isHovered && <span className="text">Entertainment</span>}
        </li>
        <li className="sidenav-item">
          <span className="icon">🔬</span>
          {isHovered && <span className="text">Sci/Tech</span>}
        </li>
        <li className="sidenav-item">
          <span className="icon">💼</span>
          {isHovered && <span className="text">Business</span>}
        </li>
        <li className="sidenav-item">
          <span className="icon">🏛️</span>
          {isHovered && <span className="text">Politics</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
