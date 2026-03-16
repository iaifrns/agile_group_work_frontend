import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { registerApiUrl } from "../../../constants/endpoints";
import { getAllStudentGroup } from "./getAllStudentGroups";

const registerUser = async (
  data,
  setErrMess,
  setStatus,
  navigateTo,
  handleId,
  setStudentGroups,
  setActiveGroup
) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.post(registerApiUrl, data, {
      withCredentials: true,
    });
    if (response.data.error) {
      setErrMess(response.data.error);
    } else {
      handleId(response.data.data.id);
      await getAllStudentGroup(setStatus, setStudentGroups,setActiveGroup);
      navigateTo("/profile");
    }
    setStatus(responseStatus.SUCCESS);
  } catch (e) {
    setStatus(responseStatus.ERROR);
    setErrMess("A problem occured please try again");
    console.log(e);
  }
};

export { registerUser };
