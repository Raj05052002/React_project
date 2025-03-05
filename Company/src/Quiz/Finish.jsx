import React from 'react';
import './Finish.css';

const Finish = () => {
  return (
    <div className="fi-summary-container">
      <div className="fi-header">
        <h2>Summary:</h2>
        <div className="fi-time-left">
          <span className="fi-timer-icon">⏰</span>
          <span>Time Left: </span>
          <span className="fi-time">43:32</span>
          <span className="fi-time-unit"> Min Sec</span>
        </div>
      </div>

      <div className="fi-warning-message">
        <p>
          <strong>!</strong> You have gone through all the questions. Either browse through them once again or Finish your assessment.
        </p>
      </div>

      <div className="fi-chart-section">
        <div className="fi-chart">
          <div className="fi-chart-inner">
            <p className="fi-total-questions">30</p>
            <p>Total Questions</p>
          </div>
          <div className="fi-chart-answered"></div>
        </div>
        <div className="fi-question-status">
          <div className="fi-answered">
            <div className="fi-answered-box"></div>
            <p>Answered & Submitted: 4</p>
          </div>
          <div className="fi-skipped">
            <div className="fi-skipped-box"></div>
            <p>Skipped: 26</p>
          </div>
        </div>
      </div>

      <div className="fi-status-of-questions">
        <p>Status of Questions</p>
        <div className="fi-question-status-grid">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className={`fi-question-number ${index < 4 ? 'fi-answered-question' : 'fi-skipped-question'}`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="fi-buttons">
        <button className="fi-close-button">Close</button>
        <button className="fi-finish-button">Finish</button>
      </div>
    </div>
  );
};

export default Finish;
