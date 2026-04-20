import { responseStatus } from "../assets/enum/responseStatus";
import CloseIcon from "../assets/icons/close";
import Loader from "../assets/icons/loader";
import "../css/confirmationPopup.css";
  {/* ConfirmationPopup component is used to render the confirmation popup when the user perform some actions that require confirmation, it will display the confirmation message and two buttons, one for cancel and one for confirm, it will also display the loading icon when the status is pending */}
const ConfirmationPopup = ({ message, close, confirm, loader }) => {
  if (loader == responseStatus.PENDING) {
    return (
      <div className="popup-body">
        <div className="popup-container-conf">
          <Loader />
        </div>
      </div>
    );
  }
  return (
    <div className="popup-body">
      <div className="popup-container-conf">
        <div className="close-conf">
          <div onClick={close}>
            <CloseIcon c={"white"} />
          </div>
        </div>
        <p className="popup-text-conf">{message}</p>
        <div className="btn-lineup-conf">
          <button className="btn-cancel-conf" onClick={close}>
            cancel
          </button>
          <button className="btn-confirm-conf" onClick={confirm}>
            confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
