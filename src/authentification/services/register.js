import axios from "axios";
import { registerApiUrl } from "../../constants/endpoints";
import { responseStatus } from "../../assets/enum/responseStatus";

const registerUser = async (data, setErrMess, setStatus) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.post(registerApiUrl, data);
    console.log(response);
    setStatus(responseStatus.SUCCESS);
  } catch (e) {
    setStatus(responseStatus.ERROR);
    setErrMess("A problem occured please try again");
    console.log(e);
  }
};

export { registerUser };
