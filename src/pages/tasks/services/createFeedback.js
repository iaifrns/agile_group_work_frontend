import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { getATaskUrl } from "../../../constants/endpoints";

export const createFeedback = async (taskId, comment, setStatus, setMess, setFeedback) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.post(
      getATaskUrl + "feedback/" + taskId,
      { message: comment },
      { withCredentials: true },
    );
    setStatus(responseStatus.SUCCESS)
    setMess('')
    setFeedback(response.data.data)
  } catch (e) {
    console.log(e);
    setStatus(responseStatus.ERROR);
    if (e.response.data.message) {
      alert(e.response.data.message);
    }
  }
};
