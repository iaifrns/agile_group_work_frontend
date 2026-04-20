import { useEffect, useState } from "react";
import AddIcon from "../../assets/icons/add";
import SearchIcon from "../../assets/icons/search";
import { ButtonWithIconOnLeft } from "../../components/buttons";
import { InputWithIconOnRight } from "../../components/inputs";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import DashboardLayout from "../../layout/Dashboard";
import GroupItem from "./components/GroupItem";

import { responseStatus } from "../../assets/enum/responseStatus";
import NotfoundIcon from "../../assets/icons/notfound";
import LoaderPage from "../../components/LoaderPage";
import CreateGroupPopup from "./components/CreateGroupPopup";
import JoinRequestConfimationPopup from "./components/JoinRequestConfimationPopup";
import "./css/groupList.css";
import { getAllGroups } from "./services/getAllGroups";

const GroupList = () => {
  const [searchText, setSearchText] = useState("");
  const [filterGroupList, setFilterGroupList] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [groupId, setGroupId] = useState("");
  const [showJoinPopup, setShowJoinPopup] = useState(false);
  const [showCreateGroupPopup, setShowCreateGroupPopup] = useState(false);
  const [members, setMembers] = useState([]);

  const [status, setStatus] = useState(responseStatus.PENDING);
  const [groupList, setGroupList] = useState([]);
  const [students, setStudents] = useState([]);
  {/* Filter group list when search text is updated or when group list is updated */}
  useEffect(() => {
    setFilterGroupList(
      groupList.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchText.toLowerCase()),
      ),
    );
  }, [searchText, status]);
  {/* Handle show join request confirmation popup when user click the "Join" button in GroupItem component, and set the group id and group name for the join request confirmation popup */}
  const handleJoinPopupDisplay = (group) => {
    setShowJoinPopup(true);
    setGroupId(group.id);
    setGroupName(group.name);
  };
  {/* Handle close join request confirmation popup and reset the group id and group name when user click the "Cancel" button in JoinRequestConfimationPopup component */}
  const handleCloseJoinPopupDisplay = () => {
    setShowJoinPopup(false);
    setGroupName("");
  };
  {/* Fetch group list and students list when component is mounted, and set the group list and students list */}
  useEffect(() => {
    getAllGroups(setStatus, setGroupList, setStudents);
  }, []);
  {/* Show loading when fetching group list, and show error message when fetch failed */}
  if (status == responseStatus.PENDING) {
    return (
      <DashboardLayout active={ActiveSideBarMenu.GroupList}>
        <LoaderPage />
      </DashboardLayout>
    );
  }
  {/* Render the group list page, show search input and create group button on the top, and show the filtered group list in the middle, if the filtered group list is empty, show the empty icon */}
  return (
    <DashboardLayout active={ActiveSideBarMenu.GroupList}>
      <CreateGroupPopup
        show={showCreateGroupPopup}
        close={() => {
          setMembers([]);
          setShowCreateGroupPopup(false);
        }}
        members={members}
        students={students}
        setMembers={setMembers}
      />
      <JoinRequestConfimationPopup
        show={showJoinPopup}
        name={groupName}
        closePopUp={handleCloseJoinPopupDisplay}
        groupId={groupId}
      />
      <div className="body">
        <div className="page_container">
          <div className="header_container">
            <InputWithIconOnRight
              placeholder={"search something ..."}
              Icon={SearchIcon}
              value={searchText}
              onchange={setSearchText}
            />
            <ButtonWithIconOnLeft
              text={"Create Group"}
              Icon={AddIcon}
              onclick={() => setShowCreateGroupPopup(true)}
            />
          </div>
          {filterGroupList.length == 0 ? (
            <div className="empty_group_list">
              <NotfoundIcon />
            </div>
          ) : (
            <div className="group_list_display">
              {filterGroupList.map((item, ind) => (
                <GroupItem
                  name={item.name}
                  id={ind + item.id}
                  join={() => handleJoinPopupDisplay(item)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GroupList;
