import React, { useState, useEffect } from "react";
import ColorThief from "colorthief";
import "./MentorProfile.css";
import profile from "../assets/profile.jpeg";
import linked from "../assets/linkedln.png";
import twit from "../assets/twitter.png";
import face from "../assets/facebook.png";
import { FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { CgPlayButtonO } from "react-icons/cg";
import { GoShareAndroid } from "react-icons/go";

const MentorProfile = () => {
  const [headerImage, setHeaderImage] = useState(null);
  const [navbarColor, setNavbarColor] = useState("#ffffff");
  const colorThief = new ColorThief();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setHeaderImage(imageUrl);
    }
  };

  useEffect(() => {
    if (headerImage) {
      const imgElement = document.getElementById("header-img");

      imgElement.onload = () => {
        const dominantColor = colorThief.getColor(imgElement);
        setNavbarColor(`rgb(${dominantColor.join(", ")})`);
      };
    }
  }, [headerImage]);

  return (
    <div className="r-mentor-profile">
      {/* Navbar with dynamic background color */}
      <nav style={{ backgroundColor: navbarColor, padding: "10px" }}>
        <h1 style={{ color: "#dadada" }}>Mentor Profile</h1>
      </nav>

      {/* Profile Header with background image */}
      <header
        className="r-profile-header"
        style={{
          backgroundImage: headerImage ? `url(${headerImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
        }}
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="r-upload-input"
        />
        {headerImage && (
          <img
            id="header-img"
            src={headerImage}
            alt="Header"
            style={{ display: "none" }}
            crossOrigin="anonymous"
          />
        )}
      </header>

      <div className="r-top-label">
        <FaStar className="r-star-top" />
        Top Mentor
      </div>
      <img src={profile} alt="Mentor" className="r-profile-image" />
      <div className="r-social-links">
        <a
          href="https://Facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={face} alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twit} alt="Twitter" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linked} alt="Linkedin" />
        </a>
        <GoShareAndroid className="r-share-icon" />
      </div>

      <div className="r-profile-details">
        <div className="r-name-tag">
          <strong>Mary Fulmer</strong>
        </div>
        <div className="r-post-tag">
          <b>Product Manager @ Canva</b>
        </div>
        <div className="r-experience-tag">15 years of PM experience in Tech</div>
        <div className="r-profile-info">
          <div>
            <p>🌏 Australia</p>
            <p>⭐ 5.0 (19 reviews)</p>
            <p>🟢 Active today</p>
            <p>⌚ Usually responds in a few hours</p>
          </div>
          <section className="r-mentor-skills">
            <strong>Skills</strong>
            <div className="skills-tags">
              <span>Product</span>
              <span>Marketplace</span>
              <span>Entrepreneurship</span>
            </div>
            <strong>Topics</strong>
            <div className="topics-tags">
              <span>Start a business</span>
              <span>Build a team</span>
              <span>Grow a business</span>
            </div>
            <strong>Till Now</strong>
            <div className="r-time-book">
              <div className="r-book">
                Total Bookings
                <span>
                  <strong>400</strong>
                </span>
              </div>
              <div className="r-book">
                Mentor minutes
                <span>
                  <strong>600</strong>
                </span>
              </div>
            </div>
          </section>
        </div>
        <div className="r-profile-actions">
          <button>
            <CgPlayButtonO className="r-play-button" />
            Play intro
          </button>
          <button>
            <FaHeart className="r-save-button" />
            Save
          </button>
        </div>
      </div>

      <section className="r-mentor-plan">
        <div className="r-mentor-head">
          <strong>MENTORSHIP PLAN</strong>
        </div>
        <div className="plan-details">
          <p>
            <strong>
              <span className="r-amt">$350</span> / month
            </strong>
          </p>
          <div className="r-para">
            Perfect mentoring plan if you have a strict goal in mind
          </div>
        </div>
        <div className="r-list">
          <div className="r-total-list">
            <FaCheckCircle className="r-check-circle" />
            Top Mentor
          </div>
          <div className="r-total-list">
            <FaCheckCircle className="r-check-circle" />
            Up to 2 calls per month
          </div>
          <div className="r-total-list">
            <FaCheckCircle className="r-check-circle" />
            Unlimited Q&A via chat
          </div>
          <div className="r-total-list">
            <FaCheckCircle className="r-check-circle" />
            Expect responses in 2 days
          </div>
          <div className="r-total-list">
            <FaCheckCircle className="r-check-circle" />
            Tasks & exercises
          </div>
          <div className="r-total-list">
            <FaCheckCircle className="r-check-circle" />
            Flat fee, no hidden costs
          </div>
          <div className="r-total-list">
            <FaCheckCircle className="r-check-circle" />
            7 day free trial! Cancel anytime.
          </div>
        </div>
        <button className="r-apply-button">Apply now</button>
        <div className="r-para">Only 3 spots left!</div>
      </section>
      <div className="r-last-button">
        <button>View one-off sessions</button>
      </div>
      <hr></hr>
      <div className="r-about-sec">
        <div className="r-about">
          <strong>About</strong>
        </div>
        <div className="r-about-para">
          <span>Hey all </span>
          <span>
            Thanks for stopping by my profile! I've been in tech since the early
            2000s and have a degree in management from Purdue. Since 2019 I'm
            working for Canva.
          </span>
          <span>
            I offer mentorship in a wide variety of topics. I am happy to help
            out if you are looking to run a marketplace, if you want to learn
            more about running and scaling a startup, running your own
            bootstrapped business, building side-projects, being a technical
            founder, or leadership.
          </span>
          <span>Can't wait to hear from you</span>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
