import LinkIcon from "../../../assets/icons/link";
import { ButtonWithIconOnLeft } from "../../../components/buttons";
import { stringToColor } from "../../../services/generateColor";
import "../css/groupItem.css";

const GroupItem = ({ name, id }) => {
  let logo = name.slice(0, 2);
  return (
    <div className="group_item" key={id}>
      <div className="group_logo_container" style={{backgroundColor: stringToColor(name)}}>
        <p className="group_logo">{logo}</p>
      </div>
      <p className="group_name">{name}</p>
      <ButtonWithIconOnLeft text={"Apply to Join"} Icon={LinkIcon} />
    </div>
  );
};

export default GroupItem;
