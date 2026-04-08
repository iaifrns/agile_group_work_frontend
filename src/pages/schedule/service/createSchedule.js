import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { createScheduleUrl } from "../../../constants/endpoints";

export const createSchedule = async (
  setStatus,
  data,
  scheduleList,
  setScheduleList,
  close,
) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.post(createScheduleUrl, data, {
      withCredentials: true,
    });
    setStatus(responseStatus.SUCCESS);
    setScheduleList([...scheduleList, response.data.data]);
    close();
  } catch (e) {
    console.log(e);
    setStatus(responseStatus.ERROR);
    if (e.response.data.message) {
      alert(e.response.data.message);
    }
  }
};
