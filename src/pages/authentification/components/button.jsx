import { responseStatus } from "../../../assets/enum/responseStatus";
import Loader from "../../../assets/icons/loader";
import "../css/login.css";

const CustomButton = ({ text, submit, status }) => {
  return (
    <button type="submit" onClick={submit} className="btn btn-primary">
      {status == responseStatus.PENDING ? <Loader /> : <>{text}</>}
    </button>
  );
};

export { CustomButton };
