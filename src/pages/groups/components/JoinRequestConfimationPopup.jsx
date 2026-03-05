import CuateIcon from "../../../assets/icons/cuate";

import "../css/joinReqConf.css";
import { CustomButton } from "./button";

const JoinRequestConfimationPopup = ({ name, show, closePopUp }) => {
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
          <CustomButton text={"Confirm"} color={"#5051F9"} />
        </div>
      </div>
    </div>
  );
};

export default JoinRequestConfimationPopup;
