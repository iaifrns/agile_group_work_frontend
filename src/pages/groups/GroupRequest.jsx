import { useContext, useEffect, useState } from "react";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import DashboardLayout from "../../layout/Dashboard";

import { responseStatus } from "../../assets/enum/responseStatus";
import SearchIcon from "../../assets/icons/search";
import LoaderPage from "../../components/LoaderPage";
import { Context } from "../../hooks/useContext";
import "./css/GroupRequest.css";
import { getAllGroupRequest } from "./services/getAllGroupRequest";

const GroupRequestPage = () => {
  const [status, setStatus] = useState(responseStatus.PENDING);
  const [requestList, setRequestList] = useState([]);

  const { activeGroup } = useContext(Context);

  useEffect(() => {
    getAllGroupRequest(setStatus, setRequestList, activeGroup.id);
  }, []);

  if (status == responseStatus.PENDING) {
    return (
      <DashboardLayout active={ActiveSideBarMenu.GroupDetail}>
        <LoaderPage />
      </DashboardLayout>
    );
  }

  if (requestList.length < 1) {
    return (
      <DashboardLayout active={ActiveSideBarMenu.GroupDetail}>
        <p>Nothing in here</p>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout active={ActiveSideBarMenu.GroupDetail}>
      <main className="main">
        <section className="group-requests">
          <div className="group-header">
            <h2>Group requests</h2>
            <div className="search-box">
              <input type="text" placeholder="Search anything..." />
              <SearchIcon />
            </div>
          </div>

          <div className="request-table">
            <div className="table-header">
              <span>Name</span>
              <span>Email</span>
              <span>Approve</span>
              <span>Decline</span>
            </div>
            {requestList.map((request) => (
              <div className="table-row" key={request.id}>
                <span>{request.student.name}</span>
                <span>{request.student.email}</span>
                <button className="approve">✓</button>
                <button className="decline">✕</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </DashboardLayout>
  );
};

export default GroupRequestPage;
