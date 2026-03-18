import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { getStudentRequestUrl } from "../../../constants/endpoints";

export const getStudentRequest = async (setStatus, setRequestList) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.get(getStudentRequestUrl, {
      withCredentials: true,
    });
    setRequestList(response.data.requestList);
    setStatus(responseStatus.SUCCESS);
  } catch (e) {
    setStatus(responseStatus.ERROR);
    console.log(e);
    if (e.response.data.message) {
      alert(e.response.data.message);
    }
  }
};
