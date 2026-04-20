import { useNavigate, useParams } from "react-router-dom";
import BackButtonLogo from "../../assets/icons/backButton";
import MenuIcon from "../../assets/icons/MenuIcon";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import DashboardLayout from "../../layout/Dashboard";
import "./css/taskDetail.css";
import { useContext, useEffect, useState } from "react";
import { responseStatus } from "../../assets/enum/responseStatus";
import { getTaskDetail } from "./services/getATaskDetail";
import LoaderPage from "../../components/LoaderPage";
import { stringToColor } from "../../services/generateColor";
import { TaskSTatus } from "../../constants/taskStatus";
import UpdateStatus from "./components/UpdateStatus";
import DeleteIcon from "../../assets/icons/delete";
import { deleteTask } from "./services/deleteTask";
import { Context } from "../../hooks/useContext";
import { createFeedback } from "./services/createFeedback";
import Loader from "../../assets/icons/loader";
import AddIcon from "../../assets/icons/add";
import { timeAgo } from "../../services/timedifference";
import UpdateAssign from "./components/updateAssign";
import UpdateTaskInfo from "./components/UpdateTask";
import EditIcon from "../../assets/icons/edit";
import { TaskType } from "../../constants/taskCategory";

const TaskDetailPage = () => {
  const navigateTo = useNavigate();
  const { taskId } = useParams();
  const { activeGroup, id } = useContext(Context);

  const [task, setTask] = useState();
  const [status, setStatus] = useState(responseStatus.PENDING);
  const [showUpdateStatus, setShowUpdateStatus] = useState(false);
  const [showDropdown, setShowDropDown] = useState(false);
  const [comment, setComment] = useState("");
  const [feedbackLoader, setFeedbackLoader] = useState();
  const [showAssignPopup, setShowAssignPopup] = useState(false);
  const [showUpdateTaskPopup, setShowUpdateTaskPopup] = useState(false);

  {/* Fetch task detail when component is mounted or taskId is changed */}
  useEffect(() => {
    getTaskDetail(setStatus, setTask, taskId);
  }, [taskId]);
  
  {/* Filter task list when switch between different task category */}
  const handleProgress = (progress) => {
    if (progress == TaskSTatus.TODO) {
      return "15%";
    } else if (progress == TaskSTatus.INPROGRESS) {
      return "45%";
    } else if (progress == TaskSTatus.COMPLETED) {
      return "100%";
    }
  };
  {/* Handle delete task */}
  const handleDelete = () => {
    deleteTask(setStatus, taskId, navigateTo);
  };
  {/* Set feedback after create new feedback */}
  const setFeedback = (feedback) => {
    setTask({ ...task, feedBack: [feedback, ...task.feedBack] });
  };
  {/* Handle create new feedback */}
  const handleCreateFeedBack = () => {
    createFeedback(taskId, comment, setFeedbackLoader, setComment, setFeedback);
  };

  if (status == responseStatus.PENDING) {
    return (
      <DashboardLayout active={ActiveSideBarMenu.Task}>
        <div className="main-container-detail-task">
          {" "}
          <LoaderPage />{" "}
        </div>{" "}
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout
      active={
        task.type == TaskType.group
          ? ActiveSideBarMenu.Task
          : ActiveSideBarMenu.MyCommitment
      }
    >
      {showUpdateTaskPopup && (
        <UpdateTaskInfo
          task={task}
          close={() => setShowUpdateTaskPopup(false)}
          setTask={setTask}
        />
      )}
      {showAssignPopup && (
        <UpdateAssign
          members={task.students}
          groupId={activeGroup.id}
          close={() => setShowAssignPopup(false)}
          task={task}
          taskId={taskId}
          setTask={setTask}
        />
      )}
      {showUpdateStatus && (
        <UpdateStatus
          close={() => setShowUpdateStatus(false)}
          task={task}
          setTask={setTask}
        />
      )}
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
          <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            {task.students.filter((student) => student.id == id).length > 0 && (
              <button
                className="tab active"
                onClick={() => setShowUpdateStatus(true)}
              >
                Update Status
              </button>
            )}

            <div style={{ position: "relative" }}>
              <div onClick={() => setShowDropDown(true)}>
                <MenuIcon c={"white"} />
              </div>
              {showDropdown && (
                <div
                  className="drop-down-container"
                  onMouseLeave={() => setShowDropDown(false)}
                >
                  {(activeGroup.admin == id ||
                    task.type == TaskType.personal) && (
                    <div className="delete-task" onClick={handleDelete}>
                      <DeleteIcon c={"#d02e2e"} />
                      <p>delete</p>
                    </div>
                  )}
                  <div
                    className="update-task"
                    onClick={() => setShowUpdateTaskPopup(true)}
                  >
                    <EditIcon c={"#4242aa"} />
                    <p>Update Task</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="task-detail-container">
          <div className="left">
            <div className="card big">
              <div className="tags">
                <span className="tag primary">{task.category}</span>
                <span className="tag">
                  {task.groupId ? "Group" : "Personal"}
                </span>
              </div>

              <h2 style={{ width: "100%", textAlign: "start" }}>
                {task.title}
              </h2>

              <div className="desc-block">
                <span className="desc-title">Description:</span>
                <p>{task.desc}</p>
              </div>

              <div className="divider"></div>

              <div className="task-info">
                <div>
                  <span>Created DATE</span>
                  <p>{task.createdAt.toString().split("T")[0]}</p>
                </div>
                <div>
                  <span>DUE DATE</span>
                  <p>{task.dueDate.toString().split("T")[0]}</p>
                </div>
                <div>
                  <span>STATUS</span>
                  <p style={{ color: stringToColor(task.status) }}>
                    {task.status}
                  </p>
                </div>
              </div>
            </div>

            <div className="card outline">
              <div className="feedback-header">
                <div className="feedback-title">
                  <h3>Feedback</h3>
                </div>
                <span className="count">{task.feedBack.length} Comments</span>
              </div>
              <div className="input-box">
                <input
                  placeholder="Type your comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button
                  onClick={() => {
                    if (feedbackLoader != responseStatus.PENDING) {
                      handleCreateFeedBack();
                    }
                  }}
                >
                  {feedbackLoader == responseStatus.PENDING ? (
                    <Loader c={"white"} />
                  ) : (
                    <p>
                      <AddIcon c={"white"} />
                    </p>
                  )}
                </button>
              </div>
              {task.feedBack.map((feedBack) => (
                <div className="comment">
                  <div className="avatar gradient">
                    {(
                      feedBack.student.firstName + feedBack.student.lastName
                    ).slice(0, 2)}
                  </div>
                  <div className="comment-body">
                    <p className="name">
                      {feedBack.student.firstName +
                        " " +
                        feedBack.student.lastName}{" "}
                      <span className="time">
                        {timeAgo(feedBack.createdAt)}
                      </span>
                    </p>
                    <p className="text">{feedBack.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="right">
            <div className="card progress-card">
              <p className="progress-title">TASK PROGRESS</p>

              <div className="progress-top">
                <span className="percent">{handleProgress(task.status)}</span>
                <span className="milestone">{task.status}</span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: handleProgress(task.status) }}
                ></div>
              </div>
            </div>

            <div className="card team-card">
              <p className="team-title">ASSIGNED MEMBER</p>
              {task.students.map((student) => (
                <div className="member">
                  <div className="avatar-circle purple">
                    {(student.firstName + student.lastName).slice(0, 2)}
                  </div>
                  <div>
                    <p className="name">
                      {student.firstName + " " + student.lastName}
                    </p>
                    <span className="role">Member</span>
                  </div>
                </div>
              ))}

              {activeGroup.admin == id && task.type == TaskType.group && (
                <button
                  className="manage-btn"
                  onClick={() => setShowAssignPopup(true)}
                >
                  Manage Roles
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TaskDetailPage;
