import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { getAllScheduleUrl } from "../../../constants/endpoints";

export const getSchedules = async (setStatus, setScheduleList) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.get(getAllScheduleUrl, {
      withCredentials: true,
    });
    setScheduleList(response.data.data);
    console.log(response.data.data)
    setStatus(responseStatus.SUCCESS);
  } catch (e) {
    console.log(e);
    setStatus(responseStatus.ERROR);
    if (e.response.data.message) {
      alert(e.response.data.message);
    }
  }
};
