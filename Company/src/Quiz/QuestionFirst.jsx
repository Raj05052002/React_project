import React from 'react';
import './QuestionFirst.css';

const QuestionFirst = () => {
  return (
    <div className="qf-container">
      <header className="qf-header">
        <img className="qf-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Unstop_Logo.svg/2560px-Unstop_Logo.svg.png" alt="Unstop logo" />
        <div className="qf-timer">
          <span>Time Left:</span>
          <span className="qf-time">44:47</span>
          <span className="qf-unit"> Min Sec</span>
        </div>
      </header>

      <div className="qf-question-section">
        <div className="qf-question">
          <h3>Question 1.</h3>
          <p>What is the function of a router in a computer network?</p>
        </div>

        <div className="qf-answer-section">
          <p>Marks: 1.00</p>
          <div className="qf-answers">
            <div className="qf-answer-option">
              <input type="radio" name="answer" id="answer1" />
              <label htmlFor="answer1">Connects devices within the same local network</label>
            </div>
            <div className="qf-answer-option">
              <input type="radio" name="answer" id="answer2" />
              <label htmlFor="answer2">Filters and forwards data based on MAC addresses</label>
            </div>
            <div className="qf-answer-option">
              <input type="radio" name="answer" id="answer3" />
              <label htmlFor="answer3">Transmits data to the appropriate device in a LAN</label>
            </div>
            <div className="qf-answer-option">
              <input type="radio" name="answer" id="answer4" />
              <label htmlFor="answer4">Connects different networks and routes data between them</label>
            </div>
          </div>
        </div>
      </div>

      <div className="qf-navigation">
        <div className="qf-pagination">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className={`qf-page-item ${index === 0 ? 'qf-active' : ''}`}>{index + 1}</div>
          ))}
        </div>
        <div className="qf-action-buttons">
          <button className="qf-finish-button">Finish</button>
          <div className="qf-bottom-right-buttons">
            <button className="qf-skip-button">Skip</button>
            <button className="qf-submit-button">Submit</button>
          </div>
        </div>
      </div>

      <footer className="qf-footer">
        Team ID: 835192-U9A314LJ
      </footer>
    </div>
  );
};

export default QuestionFirst;
