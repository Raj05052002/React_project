import React from "react";
import face from "../assets/pics.png";
import "../Component/Gallery.css"; // Importing the CSS file

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-heading">
        <h3>
          Photo <span>Gallery</span>
        </h3>
      </div>
      <div className="gallery-grid">
        <div className="gallery-row">
          <img src={face} alt="Gallery Item" />
          <img src={face} alt="Gallery Item" />
          <img src={face} alt="Gallery Item" />
        </div>
        <div className="gallery-row">
          <img src={face} alt="Gallery Item" />
          <img src={face} alt="Gallery Item" />
          <img src={face} alt="Gallery Item" />
        </div>
        <div className="gallery-row">
          <img src={face} alt="Gallery Item" />
          <img src={face} alt="Gallery Item" />
          <img src={face} alt="Gallery Item" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
