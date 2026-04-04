import { useState } from "react";
import { responseStatus } from "../../../assets/enum/responseStatus";
import CloseIcon from "../../../assets/icons/close";
import Loader from "../../../assets/icons/loader";
import { TaskPriority } from "../../../constants/taskStatus";
import "../css/createTask.css";
import { updateTask } from "../services/updateTask";

const today = new Date().toISOString().split("T")[0];

const UpdateTaskInfo = ({ close, task, setTask }) => {
  const [formData, setFormData] = useState({
    title: {
      value: task.title,
      error: "",
    },
    desc: {
      value: task.desc,
      error: "",
    },
    priority: {
      value: task.category,
      error: "",
    },
    due: {
      value: task.dueDate.toString().split("T")[0],
      error: "",
    },
  });

  const [err, setErr] = useState("");

  const [status, setStatus] = useState();

  const handleUpdateTask = () => {
    if (formData.desc.value.length > 0 && formData.title.value.length > 0) {
      updateTask(
        setStatus,
        {
          ...task,
          title: formData.title.value,
          desc: formData.desc.value,
          category: formData.priority.value,
          dueDate:
            formData.due.value + "T" + new Date().toISOString().split("T")[1],
        },
        setTask,
        close,
      );
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
        <button className="task-create-button" onClick={handleUpdateTask}>
          Update Commitment
        </button>
      </div>
    </div>
  );
};

export default UpdateTaskInfo;
