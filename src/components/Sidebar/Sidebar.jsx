import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt } = useContext(Context);
  const loadPreviousPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
        ></img>
        <div className="new-chat">
          <img src={assets.plus_icon}></img>
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div
                  key={index} // Add a key for each item
                  onClick={() => loadPreviousPrompt(item)}
                  className="recent-entry"
                >
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="buttom">
        <div className="buttom-item recent-entry">
          <img src={assets.question_icon}></img>
          {extended ? <p>Help</p> : null}
        </div>
        <div className="buttom-item recent-entry">
          <img src={assets.history_icon}></img>
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="buttom-item recent-entry">
          <img src={assets.setting_icon}></img>
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default sidebar;
