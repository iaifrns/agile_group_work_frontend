import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { requestUrl } from "../../../constants/endpoints";

export const getAllGroupRequest = async (
  setStatus,
  setRequestList,
  groupId,
) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.get(requestUrl + groupId + "/requests", {
      withCredentials: true,
    });
    setRequestList(response.data.data)
    setStatus(responseStatus.SUCCESS)
  } catch (e) {
    console.log(e);
    setStatus(responseStatus.ERROR);
    if (e.response.data.message) {
      alert(e.response.data.message);
    } else {
      alert("Something when wrong please try later ...");
    }
  }
};
