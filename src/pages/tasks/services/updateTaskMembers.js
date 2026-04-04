import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { updateTaskMembersUrl } from "../../../constants/endpoints";

export const updateTaskMembers = async (setStatus, members, taskId, setMembers,close, taskMembers) => {
  try {
    setStatus(responseStatus.PENDING);
    const ids = members.map(i => i.id)
    const response = await axios.put(
      updateTaskMembersUrl + taskId,
      { members, oldmembers: taskMembers.filter(i => !ids.includes(i.id)) },
      { withCredentials: true },
    );
    setStatus(responseStatus.SUCCESS)
    setMembers(response.data.data)
    close()
  } catch (e) {
    setStatus(responseStatus.ERROR);
    console.log(e);
    if (e.response.data.message) {
      alert(e.response.data.message);
    }
  }
};
