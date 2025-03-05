import React, { useState } from "react";
import "./ChatApp.css"; 
import { IoSendSharp } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import pot from "../assets/profile.jpeg";

const ChatApp = () => {
  return (
    <div className="chat-app">
      <Sidebar />
      <ChatWindow />
    </div>
  );
};

const Sidebar = () => {
  const [active, setActive] = useState("message");
  return (
    <div className="sidebar-chat-setting">
      <div className="menu">
      <div
          className={`menu-of-chat ${active === "message" ? "active" : ""}`}
          onClick={() => setActive("message")}
        >
          Message
        </div>
        <div
          className={`menu-of-chat ${active === "groups" ? "active" : ""}`}
          onClick={() => setActive("groups")}
        >
          Groups
        </div>
        <div
          className={`menu-of-chat ${active === "notification" ? "active" : ""}`}
          onClick={() => setActive("notification")}
        >
          Notification
        </div>
      </div>

      <div className="search">
        <input type="text" placeholder="Search" />
      </div>

      <div className="chats-about-contact">
        {active === "message" ? (
          <div className="contacts">
          <Contact image={pot} name="SkillHeed" verified={<RiVerifiedBadgeFill className="verified-sign"/>} message="April fool’s day" time="Today, 9.52pm" unread={2} />
          <Contact image={pot} name="raghu" message="Baag" time="Today, 12.11pm" unread={1} />
          <Contact image={pot} name="Mary ma’am" message="You have to report it..." time="Today, 2.40pm" unread={1} />
          <Contact image={pot} name="Bill Gates" message="Nevermind bro" time="Yesterday, 12.31pm" unread={5} />
          <Contact image={pot} name="Victoria H" message="Okay, brother. let's see..." time="Wednesday, 11.12am" unread={0} />
        </div>
        ) : active === "groups" ? (
          <div className="contacts">
          <Contact image={pot} name="skill" message="April fool’s day" time="Today, 9.52pm" unread={2} />
          <Contact image={pot} name="skillheed" message="Baag" time="Today, 12.11pm" unread={1} />
          <Contact image={pot} name="nickicon" message="You have to report it..." time="Today, 2.40pm" unread={1} />
          <Contact image={pot} name="Bill Gates" message="Nevermind bro" time="Yesterday, 12.31pm" unread={5} />
          <Contact image={pot} name="Victoria H" message="Okay, brother. let's see..." time="Wednesday, 11.12am" unread={0} />
          </div>
        ) : active === "notification" ? (
          <div className="contacts">
          <Contact image={pot} name="books" message="April fool’s day" time="Today, 9.52pm" unread={2} />
          <Contact image={pot} name="poter" message="Baag" time="Today, 12.11pm" unread={1} />
          <Contact image={pot} name="harry" message="You have to report it..." time="Today, 2.40pm" unread={1} />
          <Contact image={pot} name="Bill Gates" message="Nevermind bro" time="Yesterday, 12.31pm" unread={5} />
          <Contact image={pot} name="Victoria H" message="Okay, brother. let's see..." time="Wednesday, 11.12am" unread={0} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

const Contact = ({ image, name, verified, message, time, unread }) => {
  return (
    <div className="contact-chat-bar">
      <div className="contact-info">
        <img src={image} className="image-of-users" />
        <div className="contact-info-detail">
        <div className="contact-name">{name}{verified}</div>
        <div className="contact-message">{message}</div>
        </div>
      </div>
      <div className="contact-time">
        {time}
        {unread > 0 && <div className="unread-count">{unread}</div>}
      </div>
    </div>
  );
};

const ChatWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOutsideClick = (e) => {
    if (isOpen && !e.target.closest('.chat-options')) {
      setIsOpen(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="profile-details-chat">
          <img src={pot} alt="profile" className="profilepic-chat" />
          <div className="contact-name-header">
            Anil
            <span className="contact-status">Online - Last seen, 2.02pm</span>
          </div>
        </div>

        <div className="chat-options">
          <button className="icon-option-chat" onClick={toggleDropdown}>
            <SlOptionsVertical className="icon-opt-edit"/>
          </button>
          {isOpen && (
            <div className="menu-list-option">
              <ul>
                <li>Block</li>
                <li>Archive</li>
                <li>Mute</li>
                <li>Delete</li>
                <li>Hide/Unhide</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="chat-messages">
        <Message content="Hey There!" time="8.30pm" incoming />
        <Message content="How are you?" time="8.30pm" incoming />
        <Message content="Hello!" time="8.33pm" />
        <Message content="I am fine and how are you?" time="8.34pm" />
        <Message
          content="I am doing well, can we meet tomorrow?"
          time="8.36pm"
          incoming
        />
        <Message content="Yes, sure!" time="8.58pm" />
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Type your message here..." />
        <button className="send-button">
          <IoSendSharp className="icon-send-chat" />
        </button>
      </div>
    </div>
  );
};

const Message = ({ content, time, incoming }) => {
  return (
    <div className={`message ${incoming ? "incoming" : "outgoing"}`}>
      <div className="message-content">{content}</div>
      <div className="message-time">{time}</div>
    </div>
  );
};

export default ChatApp;
