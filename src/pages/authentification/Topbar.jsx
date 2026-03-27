import { useContext, useEffect, useState } from "react";
import Dropdown from "../../assets/icons/dropdown";
import NotificationIcon from "../../assets/icons/notification";
import { Context } from "../../hooks/useContext";
import { stringToColor } from "../../services/generateColor";
import "./css/Topbar.css";
import { socket } from "../../App";
import { getNotification } from "../../services/getNotifications";
import { responseRequest } from "../groups/services/responseRequest";
import { responseStatus } from "../../assets/enum/responseStatus";
import Loader from "../../assets/icons/loader";
import { getUnReadNotifications } from "../../services/getUnReadNotif";
import { setNotificationsToSeen } from "../../services/setNotificationsToSeen";

const Topbar = () => {
  const {
    name,
    activeGroup,
    studentGroups,
    setActiveGroup,
    notifications,
    setNotifications,
  } = useContext(Context);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showNotificationDropDown, setShowNotificationDropDown] =
    useState(false);

  const [status, setStatus] = useState();

  useEffect(() => {
    socket.on("notification", (data) => {
      console.log(data);
      getUnReadNotifications(setStatus, setNotifications);
    });

    return () => socket.off("notification");
  }, []);

  const handleUpdateNotification = () => {
    if (showNotificationDropDown) {
      const notifList = notifications.map((notif) => notif.id);
      setNotificationsToSeen(setNotifications, notifList)
    }
  };

  return (
    <header className="topbar">
      <div></div>
      <div className="user">
        <div
          style={{ position: "relative" }}
          onClick={() => setShowNotificationDropDown(true)}
          onMouseLeave={() => {
            handleUpdateNotification();
            setShowNotificationDropDown(false);
          }}
        >
          {status == responseStatus.PENDING ? (
            <Loader />
          ) : (
            <div className="notificaion_display">
              <NotificationIcon c={"white"} />
              <p className="count_notification">{notifications.length}</p>
            </div>
          )}

          {showNotificationDropDown && (
            <div className="notification_list">
              {notifications.map((notis, ind) => (
                <div className="notification_item_info" key={ind + notis.id}>
                  <p className="text">{notis.message}</p>
                  <p className="date">{`${notis.createdAt}`.split("T")[0]}</p>
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
