import ComitmentIcon from "../assets/icons/comitment";
import DashboardIcon from "../assets/icons/dashboard";
import GroupDetailIcon from "../assets/icons/groupDetail";
import GrouplistIcon from "../assets/icons/grouplist";
import ProfileIcon from "../assets/icons/profile";
import TasksIcon from "../assets/icons/tasks";

export const ActiveSideBarMenu = {
  Dashboard: { id: 1, name: "Dashboard", Icon: DashboardIcon, path: '#' },
  Task: { id: 2, name: "Tasks list", Icon: TasksIcon, path: '#'},
  GroupList: {
    id: 3,
    name: "Browse Existing Groups or Launch Yours",
    Icon: GrouplistIcon,
    path: '/group/list'
  },
  Commitment: { id: 4, name: "Commitments", Icon: ComitmentIcon, path: '#' },
  Profile: { id: 5, name: "Profile", Icon: ProfileIcon, path: '/profile' },
  GroupDetail: { id: 6, name: "Group details", Icon: GroupDetailIcon, path: "/group/detail" },
};
