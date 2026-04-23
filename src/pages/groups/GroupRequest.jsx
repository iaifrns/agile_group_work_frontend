import { useContext, useEffect, useState } from "react";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import DashboardLayout from "../../layout/Dashboard";

import { responseStatus } from "../../assets/enum/responseStatus";
import SearchIcon from "../../assets/icons/search";
import LoaderPage from "../../components/LoaderPage";
import { Context } from "../../hooks/useContext";
import "./css/groupRequest.css";
import { getAllGroupRequest } from "./services/getAllGroupRequest";
import ConfirmationPopup from "../../components/ConfirmationPopup";
import { joinRequestResponse } from "../../constants/requestResponse";
import { responseRequest } from "./services/responseRequest";
import BackButtonLogo from "../../assets/icons/backButton";
import { useNavigate } from "react-router-dom";
import NotfoundIcon from "../../assets/icons/notfound";

const GroupRequestPage = () => {
  const [status, setStatus] = useState(responseStatus.PENDING);
  const [requestList, setRequestList] = useState([]);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [requestLoader, setRequestLoader] = useState();
  const [confirmMess, setConfirmMess] = useState("");
  const [req, setReq] = useState();

  const { activeGroup } = useContext(Context);
  const navigatorTo = useNavigate();
  {/* Fetch group request list when component is mounted, and set the group request list */}
  useEffect(() => {
    getAllGroupRequest(setStatus, setRequestList, activeGroup.id);
  }, []);
  {/* Handle show confirmation popup when user click the "Approve" button or "Decline" button in each group request item, and set the confirmation message and the request information for the confirmation popup */}
  const handleShowConfirmationPopup = (request, response) => {
    setReq({ ...request, action: response });
    if (response == joinRequestResponse.APPROVE) {
      setConfirmMess(`Approve ${request.student.name} join request?`);
    } else {
      setConfirmMess(`Decline ${request.student.name} join request?`);
    }
    setShowConfirmPopup(true);
  };
  {/* Handle submit the response of the group join request to backend, and update the group request list when response successfully */}
  const handleResponse = () => {
    responseRequest(
      setRequestLoader,
      setRequestList,
      requestList,
      activeGroup.id,
      req.id,
      req.action,
      () => setShowConfirmPopup(false),
    );
  };
  {/* Show loading when fetching group request list, and show error message when fetch failed */}
  if (status == responseStatus.PENDING) {
    return (
      <DashboardLayout active={ActiveSideBarMenu.GroupDetail}>
        <LoaderPage />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout active={ActiveSideBarMenu.GroupDetail}>
      <main className="main_content">
        {showConfirmPopup && (
          <ConfirmationPopup
            close={() => setShowConfirmPopup(false)}
            loader={requestLoader}
            message={confirmMess}
            confirm={handleResponse}
          />
        )}
        <section className="group-requests">
          <div className="group-header">
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div onClick={() => navigatorTo(-1)}>
                <BackButtonLogo c={"white"} />
              </div>
              <h2>Group requests</h2>
            </div>
            <div className="search-box">
              <input type="text" placeholder="Search anything..." />
              <SearchIcon />
            </div>
          </div>

          {requestList.length < 1 ? (
            <div className="empty_group_list">
              <NotfoundIcon />
            </div>
          ) : (
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
                  <button
                    className="approve"
                    onClick={() =>
                      handleShowConfirmationPopup(
                        request,
                        joinRequestResponse.APPROVE,
                      )
                    }
                  >
                    ✓
                  </button>
                  <button
                    className="decline"
                    onClick={() =>
                      handleShowConfirmationPopup(
                        request,
                        joinRequestResponse.DECLINE,
                      )
                    }
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
    </DashboardLayout>
  );
};

export default GroupRequestPage;
