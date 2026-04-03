import React, { useState } from "react";
import "../css/createTask.css";
import "../css/updatetask.css";
import CloseIcon from "../../../assets/icons/close";
import { TaskSTatus } from "../../../constants/taskStatus";
import { responseStatus } from "../../../assets/enum/responseStatus";
import Loader from "../../../assets/icons/loader";
import { updateTask } from "../services/updateTask";

const UpdateStatus = ({ close, task, setTask }) => {
  const [status, setStatus] = useState();

    const handleUpdate = (status) => {
        const newTask = {...task, status: status}
        updateTask(setStatus,newTask,setTask,close)
    }

  if (status == responseStatus.PENDING) {
    return (
      <div className="popup-container-task">
        <div className="popup-update-status-task">
          <Loader />
          <p>Loading ...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="popup-container-task">
      <div className="popup-update-status-task">
        <div className="close-task-popup">
          <div onClick={close}>
            <CloseIcon c={"white"} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {Object.values(TaskSTatus).map((text) => (
            <p className="task-status-text" onClick={()=>handleUpdate(text)}>{text}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpdateStatus;
