import { useNavigate } from "react-router-dom";
import BackButtonLogo from "../../assets/icons/backButton";
import MenuIcon from "../../assets/icons/MenuIcon";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import DashboardLayout from "../../layout/Dashboard";
import "./css/taskDetail.css";

const TaskDetailPage = () => {
  const navigateTo = useNavigate();
  return (
    <DashboardLayout active={ActiveSideBarMenu.GroupDetail}>
      <div className="main-container-detail-task">
        <div className="header-content">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              onClick={() => navigateTo(-1)}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <BackButtonLogo c={"white"} />
            </div>
            <p>Back</p>
          </div>
          <MenuIcon c={"white"} />
        </div>
        <div className="task-detail-container">
          <div className="left">
            <div className="card big">
              <div className="tags">
                <span className="tag primary">MEDIUM PRIORITY</span>
                <span className="tag">GENERAL</span>
              </div>

              <h2 style={{ width: "100%", textAlign: "start" }}>
                Task Details
              </h2>

              <div className="desc-block">
                <span className="desc-title">Description:</span>
                <p>Detailed information about this specific task.</p>
              </div>

              <div className="divider"></div>

              <div className="task-info">
                <div>
                  <span>DUE DATE</span>
                  <p>April 15, 2025</p>
                </div>
                <div>
                  <span>STATUS</span>
                  <p style={{color: '#1da7ff'}}>In Progress</p>
                </div>
                <div>
                  <span>PROJECT</span>
                  <p>Noteflow Core</p>
                </div>
              </div>
            </div>

            <div className="card outline">
              <div className="feedback-header">
                <div className="feedback-title">
                  <h3>Feedback</h3>
                </div>
                <span className="count">24 Comments</span>
              </div>
              <div className="input-box">
                <input placeholder="Type your comment..." />
                <button>+</button>
              </div>
              <div className="comment">
                <div className="avatar gradient">AL</div>
                <div className="comment-body">
                  <p className="name">
                    Alex Long <span className="time">2 hours ago</span>
                  </p>
                  <p className="text">The initial wireframes look great!</p>
                </div>
              </div>

              <div className="comment">
                <div className="avatar gradient">SM</div>
                <div className="comment-body">
                  <p className="name">
                    Sarah Miller <span className="time">Yesterday</span>
                  </p>
                  <p className="text">Updated the color contrast ratios.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="card progress-card">
              <p className="progress-title">TASK PROGRESS</p>

              <div className="progress-top">
                <span className="percent">60%</span>
                <span className="milestone">3/5 Milestones</span>
              </div>

              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>

              <ul className="progress-list">
                <li>Market research</li>
                <li>UX Architecture</li>
                <li>UI Design Phase 1</li>
              </ul>
            </div>

            <div className="card team-card">
              <p className="team-title">ASSIGNED TEAM</p>

              <div className="member">
                <div className="avatar-circle purple">SR</div>
                <div>
                  <p className="name">Sajib ur Rahman</p>
                  <span className="role">Project Lead</span>
                </div>
              </div>

              <div className="member">
                <div className="avatar-circle blue">AL</div>
                <div>
                  <p className="name">Alex Long</p>
                  <span className="role">UI Designer</span>
                </div>
              </div>

              <div className="member">
                <div className="avatar-circle purple">SM</div>
                <div>
                  <p className="name">Sarah Miller</p>
                  <span className="role">Fullstack Dev</span>
                </div>
              </div>

              <button className="manage-btn">Manage Roles</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TaskDetailPage;
