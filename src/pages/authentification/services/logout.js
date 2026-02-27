import axios from "axios";
import { responseStatus } from "../../assets/enum/responseStatus";
import { logoutApiUrl } from "../../constants/endpoints";

export const logout = async (setStatus, navigate, handleId) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.post(logoutApiUrl);
    if (response.data.status) {
      handleId("");
      navigate("/login");
      alert(response.data.message);
    }
    setStatus(responseStatus.SUCCESS);
  } catch (e) {
    setStatus(responseStatus.ERROR);
    console.log(e);
    alert("A problem occured please try againt");
  }
};
