import { useContext, useEffect, useState } from "react";
import CloseIcon, { SmallCloseIcon } from "../../../assets/icons/close";
import SearchIcon from "../../../assets/icons/search";
import { stringToColor } from "../../../services/generateColor";

import "../css/createGroup.css";
import { responseStatus } from "../../../assets/enum/responseStatus";
import Loader from "../../../assets/icons/loader";
import { Context } from "../../../hooks/useContext";
import { createGroup } from "../services/createGroup";
import { useNavigate } from "react-router-dom";

const CreateGroupPopup = ({ show, close, members, setMembers, students }) => {
  const [searchText, setSearchText] = useState("");
  const [filterList, setFilterList] = useState([]);

  const { id, setActiveGroup } = useContext(Context);

  const navigateTo = useNavigate()

  const [groupName, setGroupName] = useState({
    value: "",
    errMessage: "",
  });

  const [status, setStatus] = useState();

  const handleMemberList = (member) => {
    if (members.filter((item) => item.email == member.email).length < 1) {
      setMembers([...members, member]);
    }
  };

  const handleRemoveMember = (ind) => {
    let newArr = members.filter((_, i) => i != ind);
    setMembers(newArr);
  };
  {/* Filter group list when search text is updated or when group list is updated */}
  useEffect(() => {
    setFilterList(
      students.filter(
        (item) =>
          (item.firstName + " " + item.lastName).includes(searchText) ||
          item.email.includes(searchText),
      ),
    );
  }, [searchText, students]);
  {/* Handle create group by calling the createGroup service, and navigate to group detail page when create successfully */}
  const handleCreateGroup = () => {
    if (groupName.value.length < 1) {
      setGroupName({
        ...groupName,
        errMessage: "The group name cannot be empty",
      });
    } else {
      createGroup(members, groupName.value, id, setStatus, setActiveGroup, navigateTo);
      if (status == responseStatus.SUCCESS) {
        setMembers([]);
        setGroupName({ value: "", errMessage: "" });
      }
    }
  };
  {/* Show loading when creating group, and show error message when create failed */}
  if (status == responseStatus.PENDING) {
    return (
      <div
        className="popup-container"
        style={{ display: show ? "flex" : "none" }}
      >
        <div className="popup">
          <Loader />
          <p>Creating Group ...</p>
        </div>
      </div>
    );
  }
  {/* Render the create group popup, show input for group name and group members selection, and show the error message when the group name is empty when user click the "Create Group" button */}
  return (
    <div
      className="popup-container"
      style={{ display: show ? "flex" : "none" }}
    >
      <div className="popup-2">
        <div className="close_popup">
          <div onClick={close}>
            <CloseIcon c={"white"} />
          </div>
        </div>
        <div className="popup_header">
          <p className="header">Create Your Group</p>
          <p>
            Bring students together, share ideas, and collaborate seamlessly on
            tasks and projects.
          </p>
        </div>
        <div className="popup_form">
          <div className="input_container">
            <p>Group Name:</p>
            <input
              type="text"
              value={groupName.value}
              placeholder="Enter the Group Name please"
              onChange={(e) =>
                setGroupName({ ...groupName, value: e.target.value })
              }
            />
            <sapn className="errorMessage">{groupName.errMessage}</sapn>
          </div>
          <div className="input_container">
            <p>Group Members:</p>
            <div className="members_container">
              {members.length == 0 ? (
                <p className="placeholder">add a member ...</p>
              ) : (
                <>
                  {members.map((item, ind) => (
                    <div className="selected_member" key={ind + item.email}>
                      <p>{item.firstName + " " + item.lastName}</p>
                      <div onClick={() => handleRemoveMember(ind)}>
                        <SmallCloseIcon c={"white"} />
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="members_list">
              <div className="list_input_search">
                <input
                  type="text"
                  placeholder="search member ..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <SearchIcon />
              </div>
              <div className="members">
                {filterList.map((item, ind) => (
                  <div
                    className="user_info"
                    key={ind + item.email}
                    onClick={() => handleMemberList(item)}
                  >
                    <div
                      className="user_image"
                      style={{ backgroundColor: stringToColor(item.firstName) }}
                    >
                      <p>{item.firstName.slice(0, 1)}</p>
                    </div>
                    <div className="user_detail">
                      <p className="name">
                        {item.firstName + " " + item.lastName}
                      </p>
                      <p className="desc">{item.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="popup_button">
          <button onClick={handleCreateGroup}>Create Group</button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupPopup;
