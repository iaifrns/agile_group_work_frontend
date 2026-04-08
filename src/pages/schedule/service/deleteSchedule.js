import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { ScheduleUrl } from "../../../constants/endpoints";

export const deleteSchedule = async (
  setStatus,
  scheduleId,
  scheduleList,
  setScheduleList,
  close
) => {
  try {
    setStatus(responseStatus.PENDING)
    const response = await axios.delete(ScheduleUrl+scheduleId, {withCredentials: true})
    const newList = scheduleList.filter(sch => sch.id != scheduleId)
    setScheduleList(newList)
    alert(response.data.message)
    close()
  } catch (e) {
    console.log(e);
    setStatus(responseStatus.ERROR);
    if (e.response.data.message) {
      alert(e.response.data.message);
    }
  }
};
