import { useState } from "react";
import CuateIcon from "../../../assets/icons/cuate";

import "../css/joinReqConf.css";
import { CustomButton } from "./button";
import { responseStatus } from "../../../assets/enum/responseStatus";
import Loader from "../../../assets/icons/loader";
import { sendJoinRequest } from "../services/sendJoinRequest";

const JoinRequestConfimationPopup = ({ name, show, closePopUp, groupId }) => {
  const [status, setStatus] = useState();

  const handleSendRequest = () => {
    sendJoinRequest(setStatus, groupId);
  };

  if (status == responseStatus.PENDING) {
    return (
      <div
        className="popup_container"
        style={{ display: show ? "flex" : "none" }}
      >
        <div className="popup">
          <Loader />
          <p>Sending Request ...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="popup_container"
      style={{ display: show ? "flex" : "none" }}
    >
      <div className="popup">
        <CuateIcon />
        <p className="popup_text">Are you sure you want to join {name}</p>
        <div className="popup_button">
          <CustomButton text={"cancel"} color={"red"} onclick={closePopUp} />
          <CustomButton
            text={"Confirm"}
            color={"#5051F9"}
            onclick={handleSendRequest}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinRequestConfimationPopup;
