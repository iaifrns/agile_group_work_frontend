import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { getAllStudentGroupsUrl } from "../../../constants/endpoints";

export const getAllStudentGroup = async (setStatus, setGroups) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.get(getAllStudentGroupsUrl, {
      withCredentials: true,
    });
    setStatus(responseStatus.SUCCESS);
    setGroups(response.data.groups);
    console.log(response.data.groups);
  } catch (e) {
    setStatus(responseStatus.ERROR);
    console.log(e);
  }
};
