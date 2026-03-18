import { useNavigate } from "react-router-dom";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import DashboardLayout from "../../layout/Dashboard";
import "./css/groupdetail.css";
import { useContext, useEffect, useState } from "react";
import { responseStatus } from "../../assets/enum/responseStatus";
import LoaderPage from "../../components/LoaderPage";
import { Context } from "../../hooks/useContext";
import { getGroupDetailInfo } from "./services/getGroupDetailInfo";
import { stringTo6Code } from "../../services/generateCodeId";
import ConfirmationPopup from "../../components/ConfirmationPopup";
import { deleteGroup } from "./services/deleteGroup";

const GroupDetailPage = () => {
  const [status, setStatus] = useState(responseStatus.PENDING);
  const [groupDetail, setGroupDetail] = useState();
  const navigatorTo = useNavigate();
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState();

  const { activeGroup, id, setActiveGroup, studentGroups, setStudentGroups } =
    useContext(Context);

  useEffect(() => {
    getGroupDetailInfo(activeGroup.id, setStatus, setGroupDetail);
  }, [activeGroup]);

  if (status == responseStatus.PENDING) {
    return (
      <DashboardLayout active={ActiveSideBarMenu.GroupDetail}>
        <LoaderPage />
      </DashboardLayout>
    );
  }

  const handleAdminName = () => {
    return (
      groupDetail.members.filter((item) => item.id == groupDetail.admin)[0]
        .firstName +
      " " +
      groupDetail.members.filter((item) => item.id == groupDetail.admin)[0]
        .lastName
    );
  };

  const handleDeleteGroup = () => {
    deleteGroup(
      setDeleteLoader,
      activeGroup,
      setActiveGroup,
      setStudentGroups,
      studentGroups,
      navigatorTo,
    );
  };

  return (
    <DashboardLayout active={ActiveSideBarMenu.GroupDetail}>
      {showConfirmPopup && (
        <ConfirmationPopup
          message={"A you sure you want to delete this group"}
          close={() => setShowConfirmPopup(false)}
          confirm={handleDeleteGroup}
          loader={deleteLoader}
        />
      )}
      <div className="layout">
        <div className="main-content">
          <div className="page-header">
            <h1 className="page-title">Group Details</h1>
            <p className="page-subtitle">
              View and manage your group information
            </p>
          </div>

          {/* <!-- Group Information --> */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Group Information</h2>
              <span className="status-badge">Active</span>
            </div>

            <div className="info-row">
              <span className="info-label">Group Name</span>
              <div className="info-value">
                {groupDetail.name}
                <button className="btn-edit">Edit</button>
              </div>
            </div>

            <div className="info-row">
              <span className="info-label">Group ID</span>
              <span className="info-value">
                {stringTo6Code(groupDetail.id).toUpperCase()}
              </span>
            </div>

            <div className="info-row">
              <span className="info-label">Created Date</span>
              <span className="info-value">{groupDetail.createdAt}</span>
            </div>

            <div className="info-row">
              <span className="info-label">Total Members</span>
              <span className="info-value">
                {groupDetail.members.length} Members
              </span>
            </div>

            <div className="info-row">
              <span className="info-label">Admin</span>
              <span className="info-value">{handleAdminName()}</span>
            </div>
          </div>

          {/* <!-- List of Group Members --> */}
          <div className="card members-section">
            <div className="members-header">
              <h2 className="card-title">Group Members</h2>
              <div className="vertical-btn">
                {id == groupDetail.admin && (
                  <button
                    className="btn-request"
                    onClick={() => navigatorTo("/group/request")}
                  >
                    View Request
                  </button>
                )}
                {groupDetail.admin == id && (
                  <button className="btn-add">+ Add Member</button>
                )}
              </div>
            </div>

            <div className="member-list">
              {groupDetail.members.map((student) => (
                <div className="member-item">
                  <div className="member-info">
                    <div className="member-avatar">
                      {student.firstName.slice(0, 2)}
                    </div>
                    <div className="member-details">
                      <div className="member-name">
                        {student.firstName + " " + student.lastName}
                        {groupDetail.admin == student.id && (
                          <span className="admin-badge">Admin</span>
                        )}
                      </div>
                      <div className="member-email">{student.email}</div>
                    </div>
                  </div>
                  {groupDetail.admin != student.id &&
                    groupDetail.admin == id && (
                      <span className="btn-remove">Remove</span>
                    )}
                </div>
              ))}
            </div>
          </div>

          {/* <!-- Danger Zone --> */}
          {id == groupDetail.admin && (
            <div className="danger-zone">
              <h2 className="danger-title">Danger Zone</h2>
              <div className="danger-content">
                <div className="danger-info">
                  <h3>Delete This Group</h3>
                  <p>
                    Once you delete a group, there is no going back. Please be
                    certain.
                  </p>
                </div>
                <button
                  className="btn-danger"
                  onClick={() => setShowConfirmPopup(true)}
                >
                  Delete Group
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GroupDetailPage;
