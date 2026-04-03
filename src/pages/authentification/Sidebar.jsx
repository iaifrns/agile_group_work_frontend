import { useContext, useEffect, useState } from "react";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import "./css/Sidebar.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Group 9.png";
import { Context } from "../../hooks/useContext";

const Menu = ({ menuInfo, active }) => {
  const [display, setDisplay] = useState(false);
  const navigateTo = useNavigate();
  return (
    <div className="menu">
      <span
        className={`nav-item ${menuInfo.id === active.id ? "active" : ""}`}
        onMouseEnter={() => setDisplay(true)}
        onMouseLeave={() => setDisplay(false)}
        onClick={() => navigateTo(menuInfo.path)}
      >
        <menuInfo.Icon c={menuInfo.id === active.id ? "white" : ""} />
      </span>
      {display && (
        <div className="name">
          <p>{menuInfo.name}</p>
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ active }) => {
  const { studentGroups } = useContext(Context);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    if (studentGroups.length < 1) {
      const { GroupDetail, ...newMenu } = ActiveSideBarMenu;
      setMenu(newMenu);
    } else {
      setMenu(ActiveSideBarMenu);
    }
  }, [studentGroups]);
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>Linko.</span>
      </div>
      <nav className="nav">
        {Object.values(menu).map((icon, idx) => (
          <Menu
            menuInfo={icon}
            key={icon.id + icon.name + idx}
            active={active}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
