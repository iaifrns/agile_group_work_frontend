import ComitmentIcon from "../assets/icons/comitment";
import DashboardIcon from "../assets/icons/dashboard";
import GroupDetailIcon from "../assets/icons/groupDetail";
import GrouplistIcon from "../assets/icons/grouplist";
import ProfileIcon from "../assets/icons/profile";
import TasksIcon from "../assets/icons/tasks";

export const ActiveSideBarMenu = {
  Dashboard: { id: 1, name: "Dashboard", Icon: DashboardIcon },
  Task: { id: 2, name: "Tasks list", Icon: TasksIcon },
  GroupList: {
    id: 3,
    name: "Browse Existing Groups or Launch Yours",
    Icon: GrouplistIcon,
  },
  Commitment: { id: 4, name: "Commitments", Icon: ComitmentIcon },
  Profile: { id: 5, name: "Profile", Icon: ProfileIcon },
  GroupDetail: { id: 6, name: "Group details", Icon: GroupDetailIcon },
};
