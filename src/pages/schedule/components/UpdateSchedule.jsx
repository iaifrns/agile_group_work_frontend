import { useContext, useState } from "react";
import "../css/createSchedule.css";
import { responseStatus } from "../../../assets/enum/responseStatus";
import Loader from "../../../assets/icons/loader";
import CloseIcon from "../../../assets/icons/close";
import { Context } from "../../../hooks/useContext";
import { checkInputData } from "../service/checkInput";
import { updateSchedule } from "../service/updateSchedule";
import { deleteSchedule } from "../service/deleteSchedule";

const today = new Date().toISOString().split("T")[0];

const UpdateSchedule = ({ schedule, close, scheduleList, setScheduleList }) => {
  const [status, setStatus] = useState();

  const { id } = useContext(Context);

  const [formData, setFormData] = useState({
    title: { value: schedule.title, error: "" },
    desc: { value: schedule.desc, error: "" },
    date: { value: schedule.date.toString().split("T")[0], error: "" },
    time: {
      value: schedule.date.toString().split("T")[1]?.slice(0, 5) ?? "",
      error: "",
    },
  });

  const handleUpdateSchedule = () => {
    const isOk = checkInputData(formData);

    if (isOk) {
      const data = {
        title: formData.title.value,
        desc: formData.desc.value,
        date: new Date(
          `${formData.date.value}T${formData.time.value}`,
        ).toISOString(),
      };

      updateSchedule(
        setStatus,
        data,
        schedule,
        setScheduleList,
        scheduleList,
        close,
      );
    }
  };

  const handleDeleteSchedule = () => {
    deleteSchedule(setStatus, schedule.id, scheduleList, setScheduleList, close)
  }

  if (status == responseStatus.PENDING) {
    return (
      <div className="popup-schedule">
        <div className="popup-container-schedule">
          <Loader />
          <p>Loading ...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="popup-schedule">
      <div className="popup-container-schedule">
        <div className="close-popup">
          <div onClick={close}>
            <CloseIcon c={"white"} />
          </div>
        </div>
        <div className="popup-body-schedule">
          <p className="popup-title">Create New Schedule</p>
          <div className="popup-label-input">
            <p className="label">Title:</p>
            <input
              className="popup-input"
              placeholder="Enter the Title"
              value={formData.title.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: { ...formData.title, value: e.target.value },
                })
              }
              disabled={schedule.user_id != id}
            />
            <p className="error-message">{formData.title.error}</p>
          </div>
          <div className="popup-label-input">
            <p className="label">Description:</p>
            <input
              className="popup-input"
              placeholder="Enter the description"
              value={formData.desc.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  desc: { ...formData.desc, value: e.target.value },
                })
              }
              disabled={schedule.user_id != id}
            />
            <p className="error-message">{formData.desc.error}</p>
          </div>
          <div className="popup-label-input">
            <p className="label">Date:</p>
            <input
              className="popup-input"
              type="date"
              min={today}
              placeholder="Enter the description"
              value={formData.date.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  date: { ...formData.date, value: e.target.value },
                })
              }
              disabled={schedule.user_id != id}
            />
          </div>
          <div className="popup-label-input">
            <p className="label">Time:</p>
            <input
              className="popup-input"
              type="time"
              placeholder="Enter the Time of the event"
              value={formData.time.value}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  time: { ...formData.time, value: e.target.value },
                })
              }
              disabled={schedule.user_id != id}
            />
            <p className="error-message">{formData.time.error}</p>
          </div>
          <div className="popup-label-input">
            <p className="label">Schedule Type:</p>
            <input
              value={schedule.group_id ? schedule.group.name : "Personal"}
              className="popup-input"
              disabled
            />
          </div>
          
          {schedule.user_id == id && (
            <div style={{width: '100%', display:'flex', gap: '32px'}}>
            <button
              className="create-btn-schedule"
              onClick={handleDeleteSchedule}
              style={{backgroundColor: 'red'}}
            >
              delete Schedule
            </button>
            <button
              className="create-btn-schedule"
              onClick={handleUpdateSchedule}
            >
              Update Schedule
            </button>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateSchedule;
