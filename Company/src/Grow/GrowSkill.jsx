import React from "react";
import "./GrowSkill.css";
import CountUp from "./CountUp";

const GrowSkill = () => {
  return (
    <div className="grow-skill-container">
      <div className="info-cards">
        <div className="info-card">
          <h3>Exam Categories</h3>
          <p>
            <strong>
              <CountUp end={60} />+
            </strong>
          </p>
          <div className="icon red-icon"></div>
        </div>
        <div className="info-card">
          <h3>Video Lessons</h3>
          <p>
            <strong>
              <CountUp end={500} />k
            </strong>
          </p>
          <div className="icon purple-icon"></div>
        </div>
        <div className="info-card">
          <h3>Live Classes</h3>
          <p>
            <strong>
              <CountUp end={1} />k
            </strong>
          </p>
          <div className="icon pink-icon"></div>
        </div>
        <div className="info-card">
          <h3>Mentors</h3>
          <p>
            <strong>
              <CountUp end={100} />+
            </strong>
          </p>
          <div className="icon blue-icon"></div>
        </div>
        <div className="info-card">
          <h3>Top Courses</h3>
          <p>
            <strong>
              <CountUp end={40} />+
            </strong>
          </p>
          <div className="icon green-icon"></div>
        </div>
      </div>
      <div className="grow-skill-content">
        <h2>
          Grow Your Skill <br /> <span>To Advance Your Career</span>
        </h2>
        <button className="more-details-btn">More Details</button>
      </div>
    </div>
  );
};

export default GrowSkill;
