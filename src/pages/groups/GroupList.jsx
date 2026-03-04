import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import DashboardLayout from "../../layout/Dashboard";

import "./css/groupList.css";

const GroupList = () => {
  return (
    <DashboardLayout active={ActiveSideBarMenu.GroupList}>
      <div className="body">
        <div className="page_container">akljd</div>
      </div>
    </DashboardLayout>
  );
};

export default GroupList;
