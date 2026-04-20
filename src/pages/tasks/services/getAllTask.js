import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { baseBackendUrl } from "../../../constants/endpoints";
import { TaskType } from "../../../constants/taskCategory";

export const getAllTask = async (setStatus, setTaskList, type, gid) => {
  try {
    setStatus(responseStatus.PENDING);
    let response;
    if (type == TaskType.group) {
      response = await axios.get(baseBackendUrl + "tasks/group/"+gid, {
        withCredentials: true,
      });
    } else {
      response = await axios.get(baseBackendUrl + "tasks/my_tasks", {
        withCredentials: true,
      });
    }
    setTaskList(response.data.data);
    setStatus(responseStatus.SUCCESS);
  } catch (e) {
    setStatus(responseStatus.ERROR);
    console.log(e);
    if (e.response.data.message) {
      alert(e.response.data.message);
    }
  }
};
