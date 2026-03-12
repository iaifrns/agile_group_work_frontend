import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { updateStudentUrl } from "../../../constants/endpoints";

export const updateStudent = async (data, setStatus, uid, setStudent) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.put(updateStudentUrl + uid, data, {
      withCredentials: true,
    });
    setStatus(responseStatus.SUCCESS);
    setStudent({
      firstName: response.data.data.firstName,
      lastName: response.data.data.lastName,
      email: response.data.data.email,
      classLevel: response.data.data.classLevel,
      phoneNumber: response.data.data.phoneNumber,
    });
  } catch (e) {
    console.log(e);
    setStatus(responseStatus.ERROR);
  }
};
