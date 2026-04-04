import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { baseBackendUrl } from "../../../constants/endpoints";

export const getAllTask = async (setStatus, setTaskList) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.get(baseBackendUrl + "tasks/", {
      withCredentials: true,
    });
    setTaskList(response.data.data)
    setStatus(responseStatus.SUCCESS)
  } catch (e) {
    setStatus(responseStatus.ERROR)
    console.log(e);
    if (e.response.data.message) {
      alert(e.response.data.message);
    }
  }
};
