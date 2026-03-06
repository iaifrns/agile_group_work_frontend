import { useContext } from "react";
import "./css/Topbar.css";
import { Context } from "../../hooks/useContext";
import { stringToColor } from "../../services/generateColor";

const Topbar = () => {
  const { name } = useContext(Context);
  return (
    <header className="topbar">
      <div></div>
      <input type="text" placeholder="Search anything..." />
      <div className="user">
        <span className="bell">🔔</span>
        <div
          className="avatar_name"
          style={{ backgroundColor: stringToColor(name) }}
        >
          <p>{name.slice(0, 2)}</p>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
