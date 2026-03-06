import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { getAStudentUrl } from "../../../constants/endpoints";

export const getAStudent = async (setStatus, handleName, setStudent, id) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.get(getAStudentUrl + id, {
      withCredentials: true,
    });
    console.log(response.data, 'this is the response')
    if (response.data.success) {
      setStudent({
        firstName: response.data.data.firstName,
        lastName: response.data.data.lastName,
        email: response.data.data.email,
        classLevel: response.data.data.classLevel,
        phoneNumber: response.data.data.phoneNumber,
      });
      setStatus(responseStatus.SUCCESS);
      handleName(
        response.data.data.firstName + " " + response.data.data.lastName,
      );
    }
  } catch (e) {
    console.log(e);
    setStatus(responseStatus.ERROR);
  }
};
