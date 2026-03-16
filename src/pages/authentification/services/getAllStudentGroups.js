import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { getAllStudentGroupsUrl } from "../../../constants/endpoints";

export const getAllStudentGroup = async (setStatus, setGroups, setActiveGroup) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.get(getAllStudentGroupsUrl, {
      withCredentials: true,
    });
    setStatus(responseStatus.SUCCESS);
    setGroups(response.data.groups);
    if(response.data.groups[0]){
      setActiveGroup(response.data.groups[0]);
    }
    console.log(response.data.groups);
  } catch (e) {
    setStatus(responseStatus.ERROR);
    console.log(e);
  }
};
