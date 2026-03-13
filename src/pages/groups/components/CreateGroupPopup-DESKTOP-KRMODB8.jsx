import { useEffect, useState } from "react";
import CloseIcon, { SmallCloseIcon } from "../../../assets/icons/close";
import SearchIcon from "../../../assets/icons/search";
import { fakeUserList } from "../../../mock/userlist";
import { stringToColor } from "../../../services/generateColor";

import "../css/createGroup.css";

const CreateGroupPopup = ({ show, close, members, setMembers, students }) => {
  const [searchText, setSearchText] = useState("");
  const [filterList, setFilterList] = useState([]);

  const handleMemberList = (member) => {
    if (members.filter((item) => item.email == member.email).length < 1) {
      setMembers([...members, member]);
    }
  };

  const handleRemoveMember = (ind) => {
    let newArr = members.filter((_, i) => i != ind);
    setMembers(newArr);
  };

  useEffect(() => {
    setFilterList(
      students.filter(
        (item) =>
          (item.firstName + ' ' + item.lastName).includes(searchText) || item.email.includes(searchText),
      ),
    );
  }, [searchText]);
  return (
    <div
      className="popup-container"
      style={{ display: show ? "flex" : "none" }}
    >
      <div className="popup">
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
            <input type="text" />
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
                      <p>{item.name}</p>
                      <div onClick={() => handleRemoveMember(ind)}>
                        <SmallCloseIcon c={"#aeb4b9"} />
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
                      style={{ backgroundColor: stringToColor(item.name) }}
                    >
                      <p>{item.name.slice(0, 1)}</p>
                    </div>
                    <div className="user_detail">
                      <p className="name">{item.name}</p>
                      <p className="desc">{item.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="popup_button">
          <button>Create Group</button>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupPopup;
