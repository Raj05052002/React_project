import React from "react";
import "./InstutionReview.css";
import akhil from "../../../assets/Reviewimages/akhil.jpg";
import profileInst from "../../../assets/Reviewimages/surendhar.png";
import { FaPlay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const InstutionReview = () => {
  const Testimonialsdata = [
    {
      id: 1,
      usename: "Akhil Atluri",
      userpost:"Design Intern, Kofluence",
      description:
        "DesignBoat was the key to unleash my true skills... shaped me in such a way with confidence to become one of the best designers... they improved my skills a lot and a lot of support and help from the team to achieve the aspirations in Design Career.",
      post: "Design Intern, Kofluence",
      image: akhil,
      reviewprofle:profileInst,
      reviewwriter: "Surendhar Dheenadayalan",
      reviewpost: "UX Design Intern, Redd",
    },
    
  ];
  return (
    <div className="inst-review-testimonial-section">
      <h3 className="inst-heading">
        <span className="inst-first-w">H</span>ear it from the{" "}
        <span className="inst-review-highlight">students</span>
      </h3>
      <p className="inst-review-subtitle">
        <span className="inst-sub-first">A</span>dding the real-time emotion to
        the design is what a lot of designers lack.
      </p>

      {Testimonialsdata.map((data, index) => (
        <div className="inst-review-testimonial-container" key={index}>
          <div className="inst-review-left-section">
            <img
              src={data.image}
              alt="user profile"
              className="inst-review-user-image"
            />
            <div className="inst-review-student-details">
              <h2 className="inst-review-user-name">{data.usename}</h2>
              <p>{data.userpost}</p>
            </div>
            {/* <button className="inst-review-play-button">
              <FaPlay />
            </button> */}
          </div>

          <div className="inst-review-right-section">
            <p className="inst-review-testimonial-text">
              {data.description}
            </p>
            <div className="inst-review-student-signature">
              <img
                src={data.reviewprofle}
                alt="Surendhar Dheenadayalan"
                className="inst-review-signature-image"
              />
              <div>
                <h4 className="pro-inst-name">{data.reviewwriter}</h4>
                <p className="pro-inst-detail">{data.reviewpost}</p>
              </div>
            </div>
            <div className="inst-p-n-btn">
              <button className="inst-previous">
                <FaChevronLeft />
              </button>
              <button className="inst-next">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstutionReview;
