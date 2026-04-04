import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { deleteTaskUrl } from "../../../constants/endpoints";

export const deleteTask = async (setStatus, taskId, navigateTo) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.delete(deleteTaskUrl + taskId, {
      withCredentials: true,
    });
    setStatus(responseStatus.SUCCESS)
    alert(response.data.message)
    navigateTo(-1)
  } catch (e) {
    console.log(e);
    setStatus(responseStatus.ERROR);
    if (e.response.data.message) {
      alert(e.response.data.message);
    }
  }
};
