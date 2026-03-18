import axios from "axios";
import { responseStatus } from "../../../assets/enum/responseStatus";
import { deleteGroupUrl } from "../../../constants/endpoints";

export const deleteGroup = async (
  setStatus,
  activeGroup,
  setActiveGroup,
  setGroupList,
  groupList,
  navigateTo
) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.delete(deleteGroupUrl + activeGroup.id, {
      withCredentials: true,
    });
    const newList = groupList.filter(item => item.id != activeGroup.id)
    setGroupList(newList)
    if(newList[0]){
        setActiveGroup(newList[0])
    }
    alert(response.data.message)
    navigateTo('/profile')
  } catch (e) {
    console.log(e);
    setStatus(responseStatus.ERROR);
    if (e.response.data.message) {
      alert(e.response.data.message);
    }
  }
};
