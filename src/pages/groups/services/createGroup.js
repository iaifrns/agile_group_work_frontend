import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { createGroupUrl, getAllGroupsUrl } from "../../../constants/endpoints";

export const createGroup = async (
  members,
  groupName,
  userId,
  setStatus,
  setActiveGroup,
  navigateTo,
) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.post(
      createGroupUrl,
      {
        name: groupName,
        id: userId,
      },
      { withCredentials: true },
    );

    if (response.data.success == true) {
      await Promise.all(
        members.map((student) =>
          axios.post(
            getAllGroupsUrl + response.data.data.id + "/members",
            {
              studentId: student.id,
            },
            { withCredentials: true },
          ),
        ),
      );
      setStatus(responseStatus.SUCCESS);
      setActiveGroup(response.data.data);
      alert(response.data.message);
      navigateTo("/group/detail");
    } else {
      setStatus(responseStatus.ERROR);
      alert(response.data.message);
    }
  } catch (e) {
    console.log(e);
    setStatus(responseStatus.ERROR);
    if (e.response.data) {
      alert(e.response.data.message);
    } else {
      alert("something went wrong please try later");
    }
  }
};
