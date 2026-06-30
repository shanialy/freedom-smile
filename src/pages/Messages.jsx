import React, { useState } from "react";
import "./Dashboard.css";
import "./Messages.css";
import Sidebar from "../components/Sidebar";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";

import {
  FaSearch,
  FaPaperPlane,
  FaPhoneAlt,
  FaVideo,
  FaEllipsisV,
} from "react-icons/fa";

function Messages() {
  const { t } = useTranslation();

const contacts = t("messages.contacts", {
  returnObjects: true,
});

  const [selectedChat, setSelectedChat] = useState(contacts[0]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMsg = {
      sender: "me",
      text: message,
      time: t("messages.now"),
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

        <Navbar />

        {/* Main */}

        <div className="msg-wrapper">

          {/* Contact List */}

          <div className="msg-sidebar">

            <div className="msg-search">

              <FaSearch className="msg-search-icon" />

              <input
                type="text"
                placeholder={t("messages.searchPlaceholder")}
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

                    
                      <p>{t("messages.contactPreview")}</p>
                    

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
                placeholder={t("messages.chatPlaceholder")}
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