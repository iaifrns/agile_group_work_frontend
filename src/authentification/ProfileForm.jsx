import React, { useContext, useState } from "react";
import "./ProfileForm.css";
import { logout } from "./services/logout";
import { responseStatus } from "../assets/enum/responseStatus";
import Loader from "../assets/icons/loader";
import { useNavigate } from "react-router-dom";
import { Context } from "../hooks/useContext";
import { CustomButton } from "./components/button";

const ProfileForm = () => {
  const [status, setStatus] = useState();
  const { handleId } = useContext(Context);
  const navigateTo = useNavigate();
  const submit = () => {
    if (status != responseStatus.PENDING) {
      logout(setStatus, navigateTo, handleId);
    }
  };
  return (
    <section className="profile">
      <div className="profile-inner">
        <div className="profile-header">
          <div className="avatar">
            <img src="Group 1000004098.png" alt="avatar" />
          </div>
          <h2>Profile</h2>
          <div className="actions">
            <button className="btn cancel" onClick={submit}>
              {status == responseStatus.PENDING ? <Loader /> : <>Logout</>}
            </button>
            <CustomButton text={'Update'} />
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
