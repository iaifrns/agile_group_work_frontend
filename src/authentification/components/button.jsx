import { responseStatus } from "../../assets/enum/responseStatus";
import Loader from "../../assets/icons/loader";
import "../login.css";

const CustomButton = ({ text, submit, status }) => {
  return (
    <button
      type="submit"
      onClick={submit}
      class="btn btn-primary"
      disabled={status == responseStatus.PENDING}
    >
      {status == responseStatus.PENDING ? <Loader /> : text}
    </button>
  );
};

export { CustomButton };
