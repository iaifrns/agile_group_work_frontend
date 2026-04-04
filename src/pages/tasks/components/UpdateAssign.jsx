import { useEffect, useState } from "react";
import CloseIcon from "../../../assets/icons/close";
import { stringToColor } from "../../../services/generateColor";
import "../css/createTask.css";
import "../css/updateAssign.css";
import { getGroupDetailInfo } from "../../groups/services/getGroupDetailInfo";
import { responseStatus } from "../../../assets/enum/responseStatus";
import Loader from "../../../assets/icons/loader";
import { updateTaskMembers } from "../services/updateTaskMembers";

const UpdateAssign = ({ members, groupId, close, taskId, task, setTask }) => {
  const [status, setStatus] = useState(responseStatus.PENDING);
  const [groupDetail, setGroupDetail] = useState();
  const [groupMembers, setGroupMembers] = useState([]);
  const [taskMembers, setTaskMembers] = useState(members);

  useEffect(() => {
    getGroupDetailInfo(groupId, setStatus, setGroupDetail);
  }, []);

  useEffect(() => {
    if (status != responseStatus.PENDING) {
      const ids = members.map((m) => m.id);
      setGroupMembers(groupDetail.members.filter((i) => !ids.includes(i.id)));
    }
  }, [groupDetail]);

  const handleRemoveMember = (id) => {
    setGroupMembers([
      ...groupMembers,
      ...taskMembers.filter((i) => i.id == id),
    ]);
    setTaskMembers(taskMembers.filter((i) => i.id != id));
  };

  const handleAddMember = (id) => {
    setTaskMembers([...taskMembers, ...groupMembers.filter((i) => i.id == id)]);
    setGroupMembers(groupMembers.filter((i) => i.id != id));
  };

  const setMember = (member)=>{
    setTask({...task, students: member.students})
  }

  const handleSubmit = () => {
    updateTaskMembers(setStatus, taskMembers, taskId, setMember, close,members)
  }

  if (status == responseStatus.PENDING) {
    return (
      <div className="popup-container-task">
        <div className="popup-assign-container">
          <Loader />
          <p>Loading ...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="popup-container-task">
      <div className="popup-assign-container">
        <div className="close-task-popup">
          <div onClick={close}>
            <CloseIcon c={"white"} />
          </div>
        </div>
        <p className="popup-assign-title">Manage Commitment Assign</p>
        <div className="popup-assign-body">
          <div className="popup-assign-oneside">
            <p className="title-assign">Task Members</p>
            {taskMembers.map((student) => (
              <div className="member-container-data" key={student.id}>
                <div className="member-data">
                  <div
                    className="member-logo"
                    style={{
                      backgroundColor: stringToColor(student.firstName),
                    }}
                  >
                    {(student.firstName + student.lastName).slice(0, 2)}
                  </div>
                  <p className="memeber-name">
                    {student.firstName + " " + student.lastName}
                  </p>
                </div>
                <button
                  className="remove-member-button"
                  onClick={() => handleRemoveMember(student.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="popup-assign-oneside">
            <p className="title-assign">Group Members</p>
            {groupMembers.map((student) => (
              <div className="member-container-data">
                <div className="member-data">
                  <div
                    className="member-logo"
                    style={{
                      backgroundColor: stringToColor(student.firstName),
                    }}
                  >
                    {(student.firstName + student.lastName).slice(0, 2)}
                  </div>
                  <p className="memeber-name">
                    {student.firstName + " " + student.lastName}
                  </p>
                </div>
                <button
                  className="add-member-button"
                  onClick={() => handleAddMember(student.id)}
                >
                  add
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="button-container">
          <button className="cancel" onClick={close}>
            Cancel
          </button>
          <button className="save" onClick={handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateAssign;
