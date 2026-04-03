import { useState } from "react";
import { responseStatus } from "../../../assets/enum/responseStatus";
import CloseIcon from "../../../assets/icons/close";
import Loader from "../../../assets/icons/loader";
import { TaskPriority, TaskSTatus } from "../../../constants/taskStatus";
import { stringToColor } from "../../../services/generateColor";
import "../css/createTask.css";
import { createTask } from "../services/createTask";

const today = new Date().toISOString().split("T")[0];

const CreateTask = ({ groupMembers, gid, close, tasks, setTasks }) => {
  const [studentList, setStudentList] = useState([]);
  const [memberList, setMemberList] = useState(groupMembers);

  const [formData, setFormData] = useState({
    title: {
      value: "",
      error: "",
    },
    desc: {
      value: "",
      error: "",
    },
    status: {
      value: TaskSTatus.TODO,
      error: "",
    },
    priority: {
      value: TaskPriority.READING,
      error: "",
    },
    due: {
      value: today,
      error: "",
    },
  });

  const [err, setErr] = useState("");

  const [status, setStatus] = useState();

  const handleAssignStudent = (student, ind) => {
    setStudentList([...studentList, student]);
    setMemberList(memberList.filter((_, i) => i != ind));
  };

  const handleRemoveAssign = (ind, student) => {
    setStudentList(studentList.filter((_, i) => i != ind));
    setMemberList([...memberList, student]);
  };

  const handleCreateTask = () => {
    if (
      formData.desc.value.length > 0 &&
      formData.title.value.length > 0 &&
      studentList.length > 0
    ) {
      createTask(setStatus, {
        title: formData.title.value,
        desc: formData.desc.value,
        status: formData.status.value,
        category: formData.priority.value,
        type: "GROUP",
        students: studentList.map((i) => {
          return { id: i.id };
        }),
        groupId: gid,
        dueDate: formData.due.value + 'T'+new Date().toISOString().split("T")[1],
      }, close, tasks, setTasks);
    } else if (formData.desc.value.length < 1) {
      setFormData({
        ...formData,
        desc: {
          ...formData.desc,
          error: "The description should not be left empty",
        },
        title: { ...formData.title, error: "" },
      });
    } else if (formData.title.value.length < 1) {
      setFormData({
        ...formData,
        title: {
          ...formData.title,
          error: "Please Enter the title of the commitment",
        },
        desc: { ...formData.desc, error: "" },
      });
    } else {
      setErr("Assign someone to the commitment");
      setFormData({
        ...formData,
        title: {
          ...formData.title,
          error: "",
        },
        desc: { ...formData.desc, error: "" },
      });
    }
  };

  if (status == responseStatus.PENDING) {
    return (
      <div className="popup-container-task">
        <div
          className="popup-task-create"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
          <p>Loading ...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="popup-container-task">
      <div className="popup-task-create">
        <div className="close-task-popup">
          <div onClick={close}>
            <CloseIcon c={"white"} />
          </div>
        </div>
        <div className="popup-task-header">
          <p className="task-create-title">Create a new commitment</p>
          <p className="task-create-desc">create and track your commitments</p>
        </div>
        <p className="error-message">{err}</p>
        <div className="task-create-form">
          <div className="task-input-label">
            <p className="task-create-label">Title:</p>
            <input
              type="text"
              className="task-create-input"
              placeholder="Title of the commitment"
              value={formData.title.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: { ...formData.title, value: e.target.value },
                })
              }
            />
            <p className="error-message">{formData.title.error}</p>
          </div>
        </div>
        <div className="task-create-form">
          <div className="task-input-label">
            <p className="task-create-label">Description:</p>
            <textarea
              type="text"
              className="task-create-input"
              placeholder="Description of the commitment"
              value={formData.desc.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  desc: { ...formData.desc, value: e.target.value },
                })
              }
            />
            <p className="error-message">{formData.desc.error}</p>
          </div>
        </div>
        <div className="task-create-form">
          <div className="task-input-label">
            <p className="task-create-label">Status:</p>
            <select
              className="task-create-select"
              value={formData.status.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  status: { ...formData.status, value: e.target.value },
                })
              }
            >
              <option value={TaskSTatus.TODO}>{TaskSTatus.TODO}</option>
              <option value={TaskSTatus.INPROGRESS}>
                {TaskSTatus.INPROGRESS}
              </option>
              <option value={TaskSTatus.COMPLETED}>
                {TaskSTatus.COMPLETED}
              </option>
            </select>
          </div>
        </div>
        <div className="task-create-form">
          <div className="task-input-label">
            <p className="task-create-label">Priority:</p>
            <select
              className="task-create-select"
              value={formData.priority.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  priority: { ...formData.priority, value: e.target.value },
                })
              }
            >
              {Object.values(TaskPriority).map((i) => (
                <option value={i}>{i}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="task-create-form">
          <div className="task-input-label">
            <p className="task-create-label">Due Date:</p>
            <input
              type="date"
              className="task-create-input"
              value={formData.due.value}
              min={today}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  due: { ...formData.due, value: e.target.value },
                })
              }
            />
          </div>
        </div>
        <div className="task-create-form">
          <div className="task-input-label">
            <p className="task-create-label">Assign:</p>
            <div className="task-assign-box">
              <div className="student-assign-container">
                {studentList.length < 1 ? (
                  <p>Assign commitment</p>
                ) : (
                  <>
                    {studentList.map((item, ind) => (
                      <div
                        className="student-task-choosed"
                        key={ind + item.email}
                      >
                        <div
                          className="student-choosed-avatar"
                          style={{
                            backgroundColor: stringToColor(
                              item.firstName + " " + item.lastName,
                            ),
                          }}
                        >
                          {(item.firstName + item.lastName).slice(0, 2)}
                        </div>
                        <p className="student-task-name">
                          {item.firstName + " " + item.lastName}
                        </p>
                        <div onClick={() => handleRemoveAssign(ind, item)}>
                          <CloseIcon c={"white"} />
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              <div className="student-task-list">
                {memberList.map((item, ind) => (
                  <div
                    className="group-member-task"
                    key={ind + item.email}
                    onClick={() => handleAssignStudent(item, ind)}
                  >
                    <div
                      className="student-task-avatar"
                      style={{
                        backgroundColor: stringToColor(
                          item.firstName + " " + item.lastName,
                        ),
                      }}
                    >
                      {(item.firstName + item.lastName).slice(0, 2)}
                    </div>
                    <p className="student-task-name">
                      {item.firstName + " " + item.lastName}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <button className="task-create-button" onClick={handleCreateTask}>
          Create Commitment
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
