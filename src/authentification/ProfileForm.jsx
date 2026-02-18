import React from "react";
import "./ProfileForm.css";

const ProfileForm = () => {
  return (
    <section className="profile">
      <div className="profile-inner">
        <div className="profile-header">
          <div className="avatar">
            <img src="Group 1000004098.png" alt="avatar" />
          </div>
          <h2>Profile</h2>
          <div className="actions">
            <button className="btn cancel">Cancel</button>
            <button className="btn save">Save</button>
          </div>
        </div>
      </div>

      <form className="form">
        <div className="row">
          <div className="field">
            <label>First name</label>
            <input type="text" placeholder="Killian" />
          </div>
          <div className="field">
            <label>Last name</label>
            <input type="text" placeholder="James" />
          </div>
        </div>

        <div className="field">
          <label>Email</label>
          <input type="text" placeholder="killianjames@gmail.com" />
        </div>

        <div className="field">
          <label>Class Level</label>
          <input type="text" placeholder="Undergraduate, Postgraduate..." />
        </div>

        <div className="field">
          <label>Phone Number</label>
          <input type="text" placeholder="+44 01234567" />
        </div>
      </form>
    </section>
  );
};

export default ProfileForm;