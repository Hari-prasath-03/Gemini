/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context.jsx";
import "./Sidebar.css";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, previousPrompt, setResentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setResentPrompt(prompt);
    await onSent(prompt);
  }

  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended(!extended)}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="plus_icon" />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div className="resent">
            <p className="resent-title">Resent</p>
            {previousPrompt.map((item, i) => {
              return (
                <div onClick={() => loadPrompt(item)} key={i} className="resent-entry">
                  <img src={assets.message_icon} alt="message_icon" />
                  <p>{item.slice(0,18)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom">
        <div className="botton-item resent-entry">
          <img src={assets.question_icon} alt="question_icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="botton-item resent-entry">
          <img src={assets.history_icon} alt="history_icon" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="botton-item resent-entry">
          <img src={assets.setting_icon} alt="setting_icon" />
          {extended ? <p>settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
