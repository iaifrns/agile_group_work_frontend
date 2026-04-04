import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { updateATaskUrl } from "../../../constants/endpoints";

export const updateTask = async (setStatus, task, setTask, close) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.put(
      updateATaskUrl + task.id,
      {
        title: task.title,
        desc: task.desc,
        status: task.status,
        category: task.category,
        student: task.students,
        dueDate: task.dueDate
      },
      { withCredentials: true },
    );
    alert(response.data.message);
    setStatus(responseStatus.SUCCESS);
    setTask(task);
    close();
  } catch (e) {
    console.log(e);
    setStatus(responseStatus.ERROR);
    if (e.response.data.message) {
      alert(e.response.data.message);
    }
  }
};
