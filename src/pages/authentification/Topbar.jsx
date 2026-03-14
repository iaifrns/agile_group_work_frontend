import { useContext, useState } from "react";
import "./css/Topbar.css";
import { Context } from "../../hooks/useContext";
import { stringToColor } from "../../services/generateColor";
import Dropdown from "../../assets/icons/dropdown";

const Topbar = () => {
  const { name, studentGroups } = useContext(Context);
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <header className="topbar">
      <div></div>
      <input type="text" placeholder="Search anything..." />
      <div className="user">
        <span className="bell">🔔</span>
        <div
          style={{
            display: "flex",
            cursor: "pointer",
            gap: "2px",
            alignItems: "center",
          }}
          onClick={()=>{
            setShowDropDown(!showDropDown)
          }}
        >
          <div
            className="avatar_name"
            style={{ backgroundColor: stringToColor(name) }}
          >
            <p>{name.slice(0, 2)}</p>
          </div>
          {studentGroups.length > 0 && <p>{studentGroups[0].name}</p>}
          {studentGroups.length > 0 && <Dropdown />}
        </div>
        {showDropDown && studentGroups.length > 0 && (
          <div className="dropdown">
            {studentGroups.map((group) => (
              <div className="dropdownItem">{group.name}</div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Topbar;
