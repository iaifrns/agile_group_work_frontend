import { useContext, useEffect, useState } from "react";
import { responseStatus } from "../../../assets/enum/responseStatus";
import CloseIcon from "../../../assets/icons/close";
import Loader from "../../../assets/icons/loader";
import { Context } from "../../../hooks/useContext";
import "../css/createSchedule.css";
import { checkInputData } from "../service/checkInput";
import { createSchedule } from "../service/createSchedule";

const today = new Date().toISOString().split("T")[0];

const CreateSchedule = ({ close, scheduleList, setScheduleList }) => {
  const { studentGroups, id } = useContext(Context);
  const [scheduleType, setScheduleType] = useState([{ name: "Personal" }]);
  const [type, setType] = useState(0);
  const [status, setStatus] = useState();

  const [formData, setFormData] = useState({
    title: { value: "", error: "" },
    desc: { value: "", error: "" },
    date: { value: today, error: "" },
    time: { value: "", error: "" },
  });

  useEffect(() => {
    const groupList = studentGroups.filter((group) => group.admin == id);
    setScheduleType([...scheduleType, ...groupList]);
  }, []);

  const handleCreateSchedule = () => {
    const isOk = checkInputData(formData, setFormData);
    if (isOk) {
      let data = {
        title: formData.title.value,
        desc: formData.desc.value,
        date: new Date(
          `${formData.date.value}T${formData.time.value}`,
        ).toISOString(),
      };

      if (scheduleType[type].name != scheduleType[0].name) {
        data = { ...data, groupId: scheduleType[type].id };
      }
      
      createSchedule(setStatus, data, scheduleList, setScheduleList, close);
    }
  };

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
            />
            <p className="error-message">{formData.time.error}</p>
          </div>
          <div className="popup-label-input">
            <p className="label">Schedule Type:</p>
            <select
              className="popup-select"
              onChange={(e) => {
                console.log(e.target.value)
                setType(e.target.value);
              }}
            >
              {scheduleType.map((schedule, ind) => (
                <option value={ind} key={schedule.name}>
                  {schedule.name}
                </option>
              ))}
            </select>
          </div>
          <button
            className="create-btn-schedule"
            onClick={handleCreateSchedule}
          >
            Create Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSchedule;
