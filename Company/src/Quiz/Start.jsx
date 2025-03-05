import React from 'react';
import './Start.css';
import log from "../assets/Logo.png";
import { IoIosArrowBack } from "react-icons/io";

const Start = () => {
  return (
    <div className="ha-container">
      <div className="ha-left-content">
        <header className="ha-header">
          <div className="ha-back-btn"><IoIosArrowBack />Back to Opportunity</div>
          <div className="ha-title-section">
            <div className="ha-logo"><img src={log} alt="Logo" /></div>
            <div className="ha-quiz-title">
              <div className="ha-log-title">Computer Fundamentals</div>
              <div>Unstop</div>
            </div>
          </div>
        </header>

        <div className="ha-easy-level-section">
          <div><h1>EASY LEVEL</h1></div>
          <div className="ha-quiz-info">
            <div className="ha-quiz-info-text">
              <p>Quiz Duration</p>
              <p>45 Minutes</p>
            </div>
            <div className="ha-quiz-info-text">
              <p>No. of Questions</p>
              <p>30 Questions</p>
            </div>
            <div className="ha-quiz-info-text">
              <p>Start Date</p>
              <p>03 Dec 23, 10:30 AM IST</p>
            </div>
            <div className="ha-quiz-info-text">
              <p>End Date</p>
              <p>31 Dec 25, 10:30 AM IST</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ha-right-content">
        <div className="ha-right-title">Assessment Guidelines</div>
        <div className="ha-right-about">Kindly read through the following key instructions and important guidelines for this assessment:</div>
        <div className="ha-guideline-content">
          <div className="ha-assement-title">Timelines & Questions:</div>
          <ul>
            <li><strong>Assessment Window:</strong> 03 Dec 23, 10:30 AM IST to 31 Dec 25, 10:30 AM IST</li>
            <li><strong>Assessment Duration:</strong> 00:45:00 (hh:mm:ss)</li>
            <li><strong>Total Questions to be answered:</strong> 30 Questions</li>
            <li>You can attempt the assessment anytime between the provided assessment window.</li>
            <li>Please ensure that you attempt the assessment in one sitting as once you start the assessment, the timer won’t stop.</li>
            <li>You will have to finish the assessment on or before 31 Dec 25, 10:30 AM IST. To get the complete assessment duration, you need to start the assessment latest by 31 Dec 25, 09:45 AM IST. Otherwise, you’ll get less time to complete the assessment.</li>
          </ul>

          <div className="ha-assement-title">Marking:</div>
          <ul>
            <li>Each participant's ranking will be determined based on the accuracy of their answers. If two participants achieve the same score, the one who completes the assessment in the least amount of time will be ranked higher.</li>
          </ul>
          <div className="ha-assement-title">Key Instructions:</div>
          <ul>
            <li>You can access the assessment from the opportunity page itself where you registered.</li>
            <li>You'll see <strong>a button</strong> in the respective round if you've registered to initiate the assessment.</li>
            <li>Only the person who registered will be able to take the assessment. In case of team registration, the team leader who registered the team will be able to take the assessment.</li>
            <li>You'll be able to browse through the questions.</li>
            <li>You'll have to submit answers/code/solutions to all the questions individually.</li>
            <li>While you are taking the assessment, your answers/code/solutions and time of their submission are also tracked by the system question-wise.</li>
            <li>You'll be able to modify your answers during the assessment.</li>
            <li>Any participant resorting to unfair practices will be directly disqualified from the challenge.</li>
            <li>All decisions in the matter of eligibility, authenticity & final judgment will be with Unstop and the opportunity organizer.</li>
          </ul>
          <div className="ha-assement-title">Other instructions from the organizers:</div>
          <ul>
            <li>All registered teams can play this Quiz.</li>
            <li>There is no negative marking for this.</li>
            <li>All decisions in the matter of eligibility, authenticity & final judgement will be with Unstop and the organizer.</li>
          </ul>
          <div className="ha-greet-line"><strong>All the best!</strong></div>
          <div className="ha-start-box">
            <p>To Start, please type start in the box and click the 'Start' button</p>
            <div>
              <input type="text" placeholder="start" />
              <button>Start</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
