import { useNavigate } from "react-router-dom";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import DashboardLayout from "../../layout/Dashboard";
import "./css/groupdetail.css";

const GroupDetailPage = () => {
  const navigatorTo = useNavigate();
  return (
    <DashboardLayout active={ActiveSideBarMenu.GroupDetail}>
      <div class="layout">
        <div class="main-content">
          <div class="page-header">
            <h1 class="page-title">Group Details</h1>
            <p class="page-subtitle">View and manage your group information</p>
          </div>

          {/* <!-- Group Information --> */}
          <div class="card">
            <div class="card-header">
              <h2 class="card-title">Group Information</h2>
              <span class="status-badge">Active</span>
            </div>

            <div class="info-row">
              <span class="info-label">Group Name</span>
              <div class="info-value">
                Agile Project
                <button class="btn-edit">Edit</button>
              </div>
            </div>

            <div class="info-row">
              <span class="info-label">Group ID</span>
              <span class="info-value">CSM2020</span>
            </div>

            <div class="info-row">
              <span class="info-label">Created Date</span>
              <span class="info-value">15 Feburay 2024</span>
            </div>

            <div class="info-row">
              <span class="info-label">Total Members</span>
              <span class="info-value">6 Members</span>
            </div>

            <div class="info-row">
              <span class="info-label">Admin</span>
              <span class="info-value">Franc Wills Nsini</span>
            </div>
          </div>

          {/* <!-- List of Group Members --> */}
          <div class="card members-section">
            <div class="members-header">
              <h2 class="card-title">Group Members</h2>
              <div className="vertical-btn">
                <button
                  class="btn-add"
                  onClick={() => navigatorTo("/group/request")}
                >
                  View Request
                </button>
                <button class="btn-add">+ Add Member</button>
              </div>
            </div>

            <div class="member-list">
              <div class="member-item">
                <div class="member-info">
                  <div class="member-avatar">FW</div>
                  <div class="member-details">
                    <div class="member-name">
                      Franc Wills Nsini
                      <span class="admin-badge">Admin</span>
                    </div>
                    <div class="member-email">fwn@aber.ac.uk</div>
                  </div>
                </div>
                <span class="member-action">Cannot Remove</span>
              </div>

              <div class="member-item">
                <div class="member-info">
                  <div class="member-avatar">XZ</div>
                  <div class="member-details">
                    <div class="member-name">Xue Zhang</div>
                    <div class="member-email">xuz3@aber.ac.uk</div>
                  </div>
                </div>
                <button class="btn-remove">Remove</button>
              </div>

              <div class="member-item">
                <div class="member-info">
                  <div class="member-avatar">KA</div>
                  <div class="member-details">
                    <div class="member-name">Kwaku Aborah</div>
                    <div class="member-email">kwa8@aber.ac.uk</div>
                  </div>
                </div>
                <button class="btn-remove">Remove</button>
              </div>

              <div class="member-item">
                <div class="member-info">
                  <div class="member-avatar">JC</div>
                  <div class="member-details">
                    <div class="member-name">Jefferson Cobbina</div>
                    <div class="member-email">jec91@aber.ac.uk</div>
                  </div>
                </div>
                <button class="btn-remove">Remove</button>
              </div>

              <div class="member-item">
                <div class="member-info">
                  <div class="member-avatar">AL</div>
                  <div class="member-details">
                    <div class="member-name">Alessandro Lewis</div>
                    <div class="member-email">all49@aber.ac.uk</div>
                  </div>
                </div>

                <button class="btn-remove">Remove</button>
              </div>

              <div class="member-item">
                <div class="member-info">
                  <div class="member-avatar">FL</div>
                  <div class="member-details">
                    <div class="member-name">Feng Liu</div>
                    <div class="member-email">fel12@aber.ac.uk</div>
                  </div>
                </div>
                <button class="btn-remove">Remove</button>
              </div>
            </div>
          </div>

          {/* <!-- Danger Zone --> */}
          <div class="danger-zone">
            <h2 class="danger-title">Danger Zone</h2>
            <div class="danger-content">
              <div class="danger-info">
                <h3>Delete This Group</h3>
                <p>
                  Once you delete a group, there is no going back. Please be
                  certain.
                </p>
              </div>
              <button class="btn-danger">Delete Group</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GroupDetailPage;
