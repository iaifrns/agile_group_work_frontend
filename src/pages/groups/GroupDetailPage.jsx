import { useNavigate } from "react-router-dom";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import DashboardLayout from "../../layout/Dashboard";
import "./css/groupdetail.css";

const GroupDetailPage = () => {
  const navigatorTo = useNavigate();
  return (
    <DashboardLayout active={ActiveSideBarMenu.GroupDetail}>
      <div className="layout">
        <div className="main-content">
          <div className="page-header">
            <h1 className="page-title">Group Details</h1>
            <p className="page-subtitle">View and manage your group information</p>
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
                Agile Project
                <button className="btn-edit">Edit</button>
              </div>
            </div>

            <div className="info-row">
              <span className="info-label">Group ID</span>
              <span className="info-value">CSM2020</span>
            </div>

            <div className="info-row">
              <span className="info-label">Created Date</span>
              <span className="info-value">15 Feburay 2024</span>
            </div>

            <div className="info-row">
              <span className="info-label">Total Members</span>
              <span className="info-value">6 Members</span>
            </div>

            <div className="info-row">
              <span className="info-label">Admin</span>
              <span className="info-value">Franc Wills Nsini</span>
            </div>
          </div>

          {/* <!-- List of Group Members --> */}
          <div className="card members-section">
            <div className="members-header">
              <h2 className="card-title">Group Members</h2>
              <div className="vertical-btn">
                <button
                  className="btn-add"
                  onClick={() => navigatorTo("/group/request")}
                >
                  View Request
                </button>
                <button className="btn-add">+ Add Member</button>
              </div>
            </div>

            <div className="member-list">
              <div className="member-item">
                <div className="member-info">
                  <div className="member-avatar">FW</div>
                  <div className="member-details">
                    <div className="member-name">
                      Franc Wills Nsini
                      <span className="admin-badge">Admin</span>
                    </div>
                    <div className="member-email">fwn@aber.ac.uk</div>
                  </div>
                </div>
                <span className="member-action">Cannot Remove</span>
              </div>

              <div className="member-item">
                <div className="member-info">
                  <div className="member-avatar">XZ</div>
                  <div className="member-details">
                    <div className="member-name">Xue Zhang</div>
                    <div className="member-email">xuz3@aber.ac.uk</div>
                  </div>
                </div>
                <button className="btn-remove">Remove</button>
              </div>

              <div className="member-item">
                <div className="member-info">
                  <div className="member-avatar">KA</div>
                  <div className="member-details">
                    <div className="member-name">Kwaku Aborah</div>
                    <div className="member-email">kwa8@aber.ac.uk</div>
                  </div>
                </div>
                <button className="btn-remove">Remove</button>
              </div>

              <div className="member-item">
                <div className="member-info">
                  <div className="member-avatar">JC</div>
                  <div className="member-details">
                    <div className="member-name">Jefferson Cobbina</div>
                    <div className="member-email">jec91@aber.ac.uk</div>
                  </div>
                </div>
                <button className="btn-remove">Remove</button>
              </div>

              <div className="member-item">
                <div className="member-info">
                  <div className="member-avatar">AL</div>
                  <div className="member-details">
                    <div className="member-name">Alessandro Lewis</div>
                    <div className="member-email">all49@aber.ac.uk</div>
                  </div>
                </div>

                <button className="btn-remove">Remove</button>
              </div>

              <div className="member-item">
                <div className="member-info">
                  <div className="member-avatar">FL</div>
                  <div className="member-details">
                    <div className="member-name">Feng Liu</div>
                    <div className="member-email">fel12@aber.ac.uk</div>
                  </div>
                </div>
                <button className="btn-remove">Remove</button>
              </div>
            </div>
          </div>

          {/* <!-- Danger Zone --> */}
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
              <button className="btn-danger">Delete Group</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GroupDetailPage;
