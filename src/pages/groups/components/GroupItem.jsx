import LinkIcon from "../../../assets/icons/link";
import { ButtonWithIconOnLeft } from "../../../components/buttons";
import { stringToColor } from "../../../services/generateColor";
import "../css/groupItem.css";
  {/* This is the group item component, it receives group name, group id and join function as props, and render a group item with the group name and a "Join" button, when user click the "Join" button, it will trigger the join function */}
const GroupItem = ({ name, id, join }) => {
  let logo = name.slice(0, 2);
  return (
    <div className="group_item" key={id}>
      <div className="group_logo_container" style={{backgroundColor: stringToColor(name)}}>
        <p className="group_logo">{logo}</p>
      </div>
      <p className="group_name">{name}</p>
      <ButtonWithIconOnLeft text={"Apply to Join"} Icon={LinkIcon} onclick={join} />
    </div>
  );
};

export default GroupItem;
