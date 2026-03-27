import axios from "axios";
import { responseStatus } from "../assets/enum/responseStatus";
import { getNotificationsUrl } from "../constants/endpoints";

export const getNotification = async (setStatus, setNotifications) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.get(getNotificationsUrl, {
      withCredentials: true,
    });

    setStatus(responseStatus.SUCCESS)
    console.log(response.data.notifications)
    setNotifications(response.data.notifications)
  } catch (e) {
    console.log(e);
    setStatus(responseStatus.ERROR);
    if (e.response.data.message) {
      alert(e.response.data.message);
    }
  }
};
