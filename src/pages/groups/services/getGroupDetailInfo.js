import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { getAllGroupsUrl } from "../../../constants/endpoints";

export const getGroupDetailInfo = async (groupId, setStatus, setGroupInfo) => {
  try {
    const response = await axios.get(getAllGroupsUrl + groupId + "/detail", {
      withCredentials: true,
    });
    setGroupInfo(response.data.data)
    setStatus(responseStatus.SUCCESS)
  } catch (e) {
    console.log(e);
    setStatus(responseStatus.ERROR);
    if (e.response.data) {
      alert(e.response.data.message);
    } else {
      alert("An Error occured please try accessing the page later");
    }
  }
};
