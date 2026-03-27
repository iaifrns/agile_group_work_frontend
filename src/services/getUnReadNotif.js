import axios from "axios";
import { getUnReadNotificationUrl } from "../constants/endpoints";
import { responseStatus } from "../assets/enum/responseStatus";

export const getUnReadNotifications = async (setStatus, setNotifications) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.get(getUnReadNotificationUrl, {
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