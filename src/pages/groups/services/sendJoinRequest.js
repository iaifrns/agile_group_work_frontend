import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { getAllGroupsUrl } from "../../../constants/endpoints";

export const sendJoinRequest = async (setStatus, groupId) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.post(
      getAllGroupsUrl + groupId + "/join_request",
      {},
      { withCredentials: true },
    );
    setStatus(responseStatus.SUCCESS);
    alert(response.data.message);
  } catch (e) {
    console.log(e);
    setStatus(responseStatus.ERROR)
    if (e.response.data) {
      alert(e.response.data.message);
    } else {
      alert("Something went wrong, please try later");
    }
  }
};
