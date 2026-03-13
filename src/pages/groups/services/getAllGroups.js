import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import {
  getAllGroupsUrl,
  getAllStudentsUrl,
} from "../../../constants/endpoints";

export const getAllGroups = async (setStatus, setData, setStudents) => {
  try {
    setStatus(responseStatus.PENDING);

    const [response, responseStudent] = await Promise.all([
      axios.get(getAllGroupsUrl, {
        withCredentials: true,
      }),
      axios.get(getAllStudentsUrl, {
        withCredentials: true,
      }),
    ]);

    //console.log(responseStudent.data);
    setStudents(responseStudent.data.students);
    setStatus(responseStatus.SUCCESS);
    setData(response.data.data);
    //console.log(response);
  } catch (e) {
    console.log(e);
    setStatus(responseStatus.ERROR);
    alert("An Error occured please try later ...");
  }
};
