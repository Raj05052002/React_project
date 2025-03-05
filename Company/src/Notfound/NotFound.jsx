import React from 'react';
import './NotFound.css';
import symbolImage from '../assets/rotate.png';

import { PiWarningCircle } from "react-icons/pi";
import { IoArrowBack } from "react-icons/io5";


const NotFound = () => {
  return (
    <div className="not-found">
      <div className="R-symbol-container">
        <div className="symbol-rotate">
          <div><h2>4</h2></div>
          <div className="symbol-container">
      <img src={symbolImage} alt="Rotating Symbol" className="rotating-symbol" />
    </div>
          <div><h2>4</h2></div>
        </div>
      </div>
      <div className='not-found-msg'>
      <p><PiWarningCircle className='warn-msg'/>The live event is no longer available.</p>
      </div>
      <button className='b-back-btn'><IoArrowBack className='b-symbol'/> Back</button>
    </div>
  );
};

export default NotFound;
