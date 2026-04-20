import { useContext, useEffect, useState } from "react";
import Sidebar from "../pages/authentification/Sidebar";
import Topbar from "../pages/authentification/Topbar";

import { responseStatus } from "../assets/enum/responseStatus";
import LoaderPage from "../components/LoaderPage";
import { Context } from "../hooks/useContext";
import "../pages/authentification/css/ProfilePage.css";
import { getAllStudentGroup } from "../pages/authentification/services/getAllStudentGroups";
import { getUnReadNotifications } from "../services/getUnReadNotif";
  {/* DashboardLayout component is used to render the layout of the dashboard page, it will render the sidebar and the topbar, and also handle the loading state when fetching student group information and notification information, it will fetch the student group information and notification information when component is mounted, and set the student group information and notification information in the context */}
const DashboardLayout = ({ children, active }) => {
  const [status, setStatus] = useState(responseStatus.PENDING);

  const { setStudentGroups, setActiveGroup, run, setRun, setNotifications } =
    useContext(Context);
  {/* Fetch student group information and notification information when component is mounted, and set the student group information and notification information in the context, if fetch successfully, set the loading status to success, if fetch failed, it will show the error message on the page */}
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
