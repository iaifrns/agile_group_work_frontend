import ComitmentIcon from "../assets/icons/comitment";
import DashboardIcon from "../assets/icons/dashboard";
import GroupDetailIcon from "../assets/icons/groupDetail";
import GrouplistIcon from "../assets/icons/grouplist";
import ProfileIcon from "../assets/icons/profile";
import RequestListIcon from "../assets/icons/requestList";
import TasksIcon from "../assets/icons/tasks";

export const ActiveSideBarMenu = {
  Dashboard: { id: 1, name: "Dashboard", Icon: DashboardIcon, path: '#' },
  Task: { id: 2, name: "Commitments", Icon: TasksIcon, path: "/task/list"},
  GroupList: {
    id: 3,
    name: "Browse Existing Groups or Launch Yours",
    Icon: GrouplistIcon,
    path: '/group/list'
  },
  Commitment: { id: 4, name: "Scheduling", Icon: ComitmentIcon, path: '#' },
  GroupDetail: { id: 6, name: "Group details", Icon: GroupDetailIcon, path: "/group/detail" },
  RequestList: { id: 7, name: "Request List Page", Icon: RequestListIcon, path: "/group/request_list" },
  Profile: { id: 5, name: "Profile", Icon: ProfileIcon, path: '/profile' },
};
