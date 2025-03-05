import React from 'react';
import './Last.css';

const Last = () => {
  return (
    <div className="er-last-container">
      <header className="er-header">
        <h1>Computer Fundamentals</h1>
        <h2>EASY LEVEL</h2>
        <p>03 Dec 23, 10:30 AM IST - 31 Dec 25, 10:30 AM IST</p>
      </header>

      <section className="er-overview-section">
        <div className="er-overview-item">
          <h3>Total Score</h3>
          <div className="er-score-circle">
            <p>1/30 Marks Scored</p>
          </div>
        </div>
        <div className="er-overview-item">
          <h3>Finish time</h3>
          <p>11:28</p>
        </div>
        <div className="er-overview-item">
          <h3>Time taken</h3>
          <p>2m 0s</p>
        </div>
      </section>

      <section className="er-question-overview-section">
        <div className="er-question-overview-item">
          <h3>Total Questions</h3>
          <p>30</p>
        </div>
        <div className="er-question-overview-item">
          <h3>Attempted</h3>
          <p>4</p>
        </div>
        <div className="er-question-overview-item">
          <h3>Not Attempted</h3>
          <p>26</p>
        </div>
        <div className="er-question-overview-item">
          <h3>Correct</h3>
          <p>1</p>
        </div>
        <div className="er-question-overview-item">
          <h3>Incorrect</h3>
          <p>3</p>
        </div>
      </section>

      <section className="er-solutions-section">
        <h3>Solutions</h3>
        <div className="er-question-card">
          <h4>Question 1</h4>
          <p>Which SQL keyword is used to retrieve data from a database?</p>
          <ul>
            <li>1) GET</li>
            <li className="er-correct-answer">2) SELECT</li>
            <li>3) FETCH</li>
            <li>4) EXTRACT</li>
          </ul>
          <p className="er-score">Score: 1/30</p>
        </div>

        <div className="er-pagination">
          {Array.from({ length: 10 }).map((_, index) => (
            <button key={index} className="er-page-number">
              {index + 1}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Last;
