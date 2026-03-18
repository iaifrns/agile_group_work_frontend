import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { getAllGroupsUrl } from "../../../constants/endpoints";

export const removeMemeberFromGroup = async (
  groupId,
  studentId,
  setStatus,
  setGroup,
  group,
  closePopup
) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.delete(
      getAllGroupsUrl + groupId + "/members/" + studentId,
      { withCredentials: true },
    );
    const { members, ...groupInfo } = group;
    const newMembers = members.filter((item) => item.id != studentId);
    setGroup({ ...groupInfo, members: newMembers });
    setStatus(responseStatus.SUCCESS);
    closePopup(false)
    alert(response.data.message);
  } catch (e) {
    console.log(e);
    setStatus(responseStatus.ERROR);
    if (e.response.data.message) {
      alert(e.response.data.message);
    }
  }
};
