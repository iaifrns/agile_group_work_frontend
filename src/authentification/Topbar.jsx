import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <header className="topbar">
      <div></div>
      <input type="text" placeholder="Search anything..." />
      <div className="user">
        <span className="bell">🔔</span>
        <img src="Group 1000004098.png" alt="user" />
      </div>
    </header>
  );
};

export default Topbar;