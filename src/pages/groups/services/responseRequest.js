import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { requestUrl } from "../../../constants/endpoints";

export const responseRequest = async (
  setstatus,
  setRequestList,
  requestList,
  groupId,
  requestId,
  action,
  close
) => {
  try {
    setstatus(responseStatus.PENDING);
    const response = await axios.put(
      requestUrl + groupId + "/requests/" + requestId,
      { action: action },{withCredentials: true}
    );
    const newList = requestList.filter(item => item.id != requestId)
    setRequestList(newList)
    alert(response.data.message)
    close()
  } catch (e) {
    console.log(e);
    setstatus(responseStatus.ERROR);
    if (e.response.data.message) {
      alert(e.response.data.message);
    }
  }
};
