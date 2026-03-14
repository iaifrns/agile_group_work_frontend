import { useContext, useEffect, useState } from "react";
import Sidebar from "../pages/authentification/Sidebar";
import Topbar from "../pages/authentification/Topbar";

import LoaderPage from "../components/LoaderPage";

import "../pages/authentification/css/ProfilePage.css";
import { responseStatus } from "../assets/enum/responseStatus";
import { getAllStudentGroup } from "../pages/authentification/services/getAllStudentGroups";
import { Context } from "../hooks/useContext";

const DashboardLayout = ({ children, active }) => {

  const [status, setStatus] = useState(responseStatus.PENDING)

  const {setStudentGroups} = useContext(Context)

  useEffect(()=>{
    getAllStudentGroup(setStatus, setStudentGroups)
  },[])

  if(status == responseStatus.PENDING){
    return (<LoaderPage />)
  }

  return (
    <div className="app">
      <Sidebar active={active} />
      <main className="main">
        <Topbar />
        <div className="scroll">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
