import React, { useState } from "react";
import "./Dashboard.css";
import "./Messages.css";
import Sidebar from "../components/Sidebar";

import {
  FaSearch,
  FaPaperPlane,
  FaPhoneAlt,
  FaVideo,
  FaEllipsisV,
} from "react-icons/fa";

function Messages() {
  const contacts = [
    {
      id: 1,
      name: "Marvin McKinney",
      role: "Nursing Assistant",
      time: "5m",
      avatar: "https://i.pravatar.cc/100?img=11",
      unread: true,
      messages: [
        {
          sender: "them",
          text: "Hello Doctor 👋",
          time: "09:00",
        },
        {
          sender: "me",
          text: "Hello Marvin. How are you today?",
          time: "09:02",
        },
        {
          sender: "them",
          text: "I'm feeling much better.",
          time: "09:03",
        },
      ],
    },

    {
      id: 2,
      name: "Jacob Jones",
      role: "Healthcare Coordinator",
      time: "3m",
      avatar: "https://i.pravatar.cc/100?img=12",
      unread: true,
      messages: [
        {
          sender: "them",
          text: "Can I book appointment tomorrow?",
          time: "10:20",
        },
      ],
    },

    {
      id: 3,
      name: "Leslie Alexander",
      role: "Web Designer",
      time: "3m",
      avatar: "https://i.pravatar.cc/100?img=13",
      unread: false,
      messages: [
        {
          sender: "them",
          text: "Morning 😊",
          time: "08:10",
        },
      ],
    },

    {
      id: 4,
      name: "Eleanor Pena",
      role: "UI Designer",
      time: "5m",
      avatar: "https://i.pravatar.cc/100?img=14",
      unread: false,
      messages: [
        {
          sender: "them",
          text: "Please review new screens.",
          time: "11:00",
        },
      ],
    },

    {
      id: 5,
      name: "Kathryn Murphy",
      role: "Medical Assistant",
      time: "5m",
      avatar: "https://i.pravatar.cc/100?img=15",
      unread: false,
      messages: [
        {
          sender: "them",
          text: "Thank you doctor.",
          time: "12:00",
        },
      ],
    },

    {
      id: 6,
      name: "Wade Warren",
      role: "Web Designer",
      time: "5m",
      avatar: "https://i.pravatar.cc/100?img=16",
      unread: false,
      messages: [
        {
          sender: "them",
          text: "Meeting at 5?",
          time: "04:00",
        },
      ],
    },
  ];

  const [selectedChat, setSelectedChat] = useState(contacts[0]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMsg = {
      sender: "me",
      text: message,
      time: "Now",
    };

    setSelectedChat({
      ...selectedChat,
      messages: [...selectedChat.messages, newMsg],
    });

    setMessage("");
  };

  return (
    <div className="dashboard-container">
      <Sidebar />

      <main className="main-content">

        {/* Navbar */}

        <div className="navbar">

          <div className="search-box">
            <FaSearch />
            <input
              type="text"
              placeholder="Search..."
            />
          </div>

          <div className="admin-profile">

            <div className="avatar">
              SM
            </div>

            <div>
              <h5>Super Admin</h5>
              <p>admin@gmail.com</p>
            </div>

          </div>

        </div>

        {/* Main */}

        <div className="msg-wrapper">

          {/* Contact List */}

          <div className="msg-sidebar">

            <div className="msg-search">

              <FaSearch className="msg-search-icon" />

              <input
                type="text"
                placeholder="Search..."
              />

            </div>

            <div className="msg-contact-list">

              {contacts.map((user) => (

                <div
                  key={user.id}
                  className={`msg-contact ${
                    selectedChat.id === user.id
                      ? "msg-active"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedChat(user)
                  }
                >

                  <img
                    src={user.avatar}
                    alt=""
                  />

                  <div className="msg-contact-info">

                    <div className="msg-contact-top">

                      <h4>{user.name}</h4>

                      <span>{user.time}</span>

                    </div>

                    <small>{user.role}</small>

                    <p>
                      Lorem ipsum dolor sit amet
                    </p>

                  </div>

                  {user.unread && (
                    <div className="msg-dot"></div>
                  )}

                </div>

              ))}

            </div>

          </div>

          {/* Chat */}

          <div className="msg-chat">

            <div className="msg-header">

              <div className="msg-user">

                <img
                  src={selectedChat.avatar}
                  alt=""
                />

                <div>

                  <h3>{selectedChat.name}</h3>

                  <span>
                    {selectedChat.role}
                  </span>

                </div>

              </div>

              <div className="msg-header-icons">

                {/* <FaPhoneAlt />

                <FaVideo />

                <FaEllipsisV /> */}

              </div>

            </div>

            <div className="msg-body">

              {selectedChat.messages.map(
                (msg, index) => (

                  <div
                    key={index}
                    className={`msg-bubble ${
                      msg.sender === "me"
                        ? "msg-me"
                        : "msg-them"
                    }`}
                  >

                    <p>{msg.text}</p>

                    <span>{msg.time}</span>

                  </div>

                )
              )}

            </div>

            <div className="msg-footer">

              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) =>
                  setMessage(e.target.value)
                }
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  sendMessage()
                }
              />

              <button onClick={sendMessage}>

                <FaPaperPlane />

              </button>

            </div>

          </div>

        </div>

      </main>
    </div>
  );
}

export default Messages;