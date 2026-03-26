import { useContext, useState } from "react";
import "./css/Topbar.css";
import { Context } from "../../hooks/useContext";
import { stringToColor } from "../../services/generateColor";
import Dropdown from "../../assets/icons/dropdown";
import NotificationIcon from "../../assets/icons/notification";
import { fakeNotification } from "../../mock/notification";

const Topbar = () => {
  const { name, activeGroup, studentGroups, setActiveGroup } =
    useContext(Context);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showNotificationDropDown, setShowNotificationDropDown] =
    useState(false);

  return (
    <header className="topbar">
      <div></div>
      <div className="user">
        <div style={{ position: "relative" }} onClick={()=>setShowNotificationDropDown(true)} onMouseLeave={()=>setShowNotificationDropDown(false)}>
          <div className="notificaion_display">
            <NotificationIcon c={"white"} />
            <p className="count_notification">2</p>
          </div>
          {showNotificationDropDown && (
            <div className="notification_list">
              {fakeNotification.map((text, ind) => (
                <div className="notification_item_info" key={ind + text}>
                  <p className="text">{text}</p>
                  <p className="date">03/09/2025</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setShowDropDown(true)}
          onMouseLeave={() => setShowDropDown(false)}
        >
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              gap: "2px",
              alignItems: "center",
            }}
          >
            <div
              className="avatar_name"
              style={{ backgroundColor: stringToColor(name) }}
            >
              <p>{name.slice(0, 2)}</p>
            </div>
            {activeGroup && <p>{activeGroup.name}</p>}
            {activeGroup && <Dropdown />}
          </div>
          {showDropDown && studentGroups.length > 0 && (
            <div className="dropdown">
              {studentGroups.map((group) => (
                <div
                  className="dropdownItem"
                  onClick={() => {
                    setActiveGroup(group);
                    setShowDropDown(false);
                  }}
                >
                  {group.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Topbar;
