import { useContext, useEffect, useState } from "react";
import Sidebar from "../pages/authentification/Sidebar";
import Topbar from "../pages/authentification/Topbar";

import { responseStatus } from "../assets/enum/responseStatus";
import LoaderPage from "../components/LoaderPage";
import { Context } from "../hooks/useContext";
import "../pages/authentification/css/ProfilePage.css";
import { getAllStudentGroup } from "../pages/authentification/services/getAllStudentGroups";
import { getUnReadNotifications } from "../services/getUnReadNotif";

const DashboardLayout = ({ children, active }) => {
  const [status, setStatus] = useState(responseStatus.PENDING);

  const { setStudentGroups, setActiveGroup, run, setRun, setNotifications } =
    useContext(Context);

  useEffect(() => {
    if (!run) {
      Promise.all([
        getAllStudentGroup(setStatus, setStudentGroups, setActiveGroup),
        getUnReadNotifications(setStatus, setNotifications),
      ]);
      setRun(true);
    } else {
      setStatus(responseStatus.SUCCESS);
    }
  }, []);

  if (status == responseStatus.PENDING) {
    return <LoaderPage />;
  }

  return (
    <div className="app">
      <Sidebar active={active} />
      <main className="main">
        <Topbar />
        <div className="scroll">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
