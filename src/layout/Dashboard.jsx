import { useContext, useEffect, useState } from "react";
import Sidebar from "../pages/authentification/Sidebar";
import Topbar from "../pages/authentification/Topbar";

import "../pages/authentification/css/ProfilePage.css";
import { getAllStudentGroup } from "../pages/authentification/services/getAllStudentGroups";
import { responseStatus } from "../assets/enum/responseStatus";
import { Context } from "../hooks/useContext";
import LoaderPage from "../components/LoaderPage";

const DashboardLayout = ({ children, active }) => {
  const [status, setStatus] = useState(responseStatus.PENDING);

  const { setStudentGroups, setActiveGroup, run, setRun } =
    useContext(Context);

  useEffect(() => {
    if (!run) {
      getAllStudentGroup(setStatus, setStudentGroups, setActiveGroup);
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
