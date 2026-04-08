import React from "react";
import CloseIcon from "../../../assets/icons/close";
import "../css/createSchedule.css";

const today = new Date().toISOString().split("T")[0];

const CreateSchedule = ({ close }) => {
  return (
    <div className="popup-schedule">
      <div className="popup-container-schedule">
        <div className="close-popup">
          <div onClick={close}>
            <CloseIcon c={"white"} />
          </div>
        </div>
        <div className="popup-body-schedule">
          <p className="popup-title">Create New Schedule</p>
          <div className="popup-label-input">
            <p className="label">Title:</p>
            <input className="popup-input" placeholder="Enter the Title" />
          </div>
          <div className="popup-label-input">
            <p className="label">Description:</p>
            <input
              className="popup-input"
              placeholder="Enter the description"
            />
          </div>
          <div className="popup-label-input">
            <p className="label">Date:</p>
            <input
              className="popup-input"
              type="date"
              min={today}
              placeholder="Enter the description"
            />
          </div>
          <div className="popup-label-input">
            <p className="label">Time:</p>
            <input
              className="popup-input"
              type="time"
              placeholder="Enter the Time of the event"
            />
          </div>
          <button className="create-btn-schedule">Create Schedule</button>
        </div>
      </div>
    </div>
  );
};

export default CreateSchedule;
