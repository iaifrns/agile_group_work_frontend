import { responseStatus } from "../../../assets/enum/responseStatus";
import Loader from "../../../assets/icons/loader";
import "../css/login.css";
  {/* CustomButton component is used to render the button in the login and registration page, it will display the loading icon when the status is pending, and display the button text when the status is not pending */}
const CustomButton = ({ text, submit, status }) => {
  return (
    <button type="submit" onClick={submit} className="btn btn-primary">
      {status == responseStatus.PENDING ? <Loader /> : <>{text}</>}
    </button>
  );
};

export { CustomButton };
