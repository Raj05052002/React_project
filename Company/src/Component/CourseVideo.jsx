import React from "react";
import "./CourseVideo.css"; // Ensure this path is correct

const CourseVideo = () => {
  return (
    <div className="app-container">
      <div className="content">
        <VideoSection />
        <Sidebar />
      </div>
    </div>
  );
};

const VideoSection = () => {
  return (
    <div className="video-section">
      <div className="video-container">
        {/* Replace with an actual image or link */}
        <img src="https://via.placeholder.com/640x360" alt="Video" className="video-thumbnail" />
      </div>
      <div className="notes-section">
        <h3>Notes</h3>
        <p>
          Hi guys, Natalie here with a very unconventional method that will get you hooked within
          minutes into this awesome course...
        </p>
      </div>
      <div className="resources-section">
        <button className="resources-button">Resources</button>
        <button className="quiz-button">Quiz</button>
      </div>
      <div className="about-instructor">
        <h4>About Instructor</h4>
        <p>Natalie is a freelance designer...</p>
      </div>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="progress">
        <h4>Masterclass: Designing for Web</h4>
        <p>2/5 COMPLETED</p>
      </div>
      <div className="chapters">
        <h4>Chapters</h4>
        <ul>
          <li><span>✔</span> What is Interaction Design</li>
          <li><span>✔</span> Motion in UI Design</li>
          <li><span>●</span> Fundamentals of Web Design</li>
          <li><span>○</span> Improving Visual Skills</li>
          <li><span>○</span> Finding Inspiration</li>
        </ul>
      </div>
      <Discussion />
    </div>
  );
};

const Discussion = () => {
  return (
    <div className="discussion">
      <h4>Discussion</h4>
      <div className="comment">
        <p><b>Robin Sherbatsky:</b> Cool stuff tutor!...</p>
        <button>Reply</button>
      </div>
      <div className="comment">
        <p><b>Jason Statham:</b> Motion in UI...</p>
        <button>Reply</button>
      </div>
    </div>
  );
};

export default CourseVideo;
