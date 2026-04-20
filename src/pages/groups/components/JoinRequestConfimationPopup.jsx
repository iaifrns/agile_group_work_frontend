import { useState } from "react";
import CuateIcon from "../../../assets/icons/cuate";

import "../css/joinReqConf.css";
import { CustomButton } from "./button";
import { responseStatus } from "../../../assets/enum/responseStatus";
import Loader from "../../../assets/icons/loader";
import { sendJoinRequest } from "../services/sendJoinRequest";
import { useNavigate } from "react-router-dom";
  {/* Component for confirming join group request, only show when user click the "Join" button in GroupItem component, it will show a popup to confirm whether user want to send join request to the group, if user click the "Confirm" button, it will trigger the sendJoinRequest service to send join request to the backend */}
const JoinRequestConfimationPopup = ({ name, show, closePopUp, groupId }) => {
  const [status, setStatus] = useState();

  const navigateTo = useNavigate()

  const handleSendRequest = () => {
    sendJoinRequest(setStatus, groupId, closePopUp, navigateTo);
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
