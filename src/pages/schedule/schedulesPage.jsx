import { useEffect, useState } from "react";
import "./css/schdeuleList.css";
import DashboardLayout from "../../layout/Dashboard";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import CreateSchedule from "./components/CreateSchedule";
import { responseStatus } from "../../assets/enum/responseStatus";
import LoaderPage from "../../components/LoaderPage";
import { getSchedules } from "./service/getSchedules";
import UpdateSchedule from "./components/UpdateSchedule";

const EventCard = ({ event, onclick }) => (
  <div
    className={`${event.group_id ? "event-card-group" : "event-card-personal"}`}
    onClick={onclick}
  >
    <div className="event-title">{event.title}</div>
    <div className="event-desc">{event.desc}</div>
    {event.group && <div className="event-desc">group: {event.group.name}</div>}
    <div className="event-desc">
      Time: {event.date.toString().split("T")[1]?.slice(0, 5) ?? ""}
    </div>
  </div>
);

const DayCell = ({ day, isCurrentMonth, isToday, events, setSchedule }) => {
  return (
    <div
      className={`day-cell ${!isCurrentMonth ? "faded" : ""} ${
        isToday ? "today" : ""
      }`}
    >
      <div className="day-number">{day.getDate()}</div>
      <div className="events">
        {events.map((event, i) => (
          <EventCard key={i} event={event} onclick={() => setSchedule(event)} />
        ))}
      </div>
    </div>
  );
};

const SchedulesPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [scheduleList, setScheduleList] = useState([]);
  const [status, setStatus] = useState(responseStatus.PENDING);
  const [schedule, setSchedule] = useState();

  useEffect(() => {
    getSchedules(setStatus, setScheduleList);
  }, []);

  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  );

  const endOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
  );

  const startDay = startOfMonth.getDay();

  const days = [];

  // Previous month placeholders
  for (let i = startDay; i > 0; i--) {
    const d = new Date(startOfMonth);
    d.setDate(d.getDate() - i);
    days.push({ date: d, current: false });
  }

  // Current month
  for (let i = 1; i <= endOfMonth.getDate(); i++) {
    const d = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    days.push({ date: d, current: true });
  }

  // Next month placeholders
  while (days.length % 7 !== 0) {
    const d = new Date(endOfMonth);
    d.setDate(d.getDate() + (days.length % 7));
    days.push({ date: d, current: false });
  }

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + offset);
    setCurrentDate(newDate);
  };

  const today = new Date();

  if (status == responseStatus.PENDING) {
    return (
      <DashboardLayout active={ActiveSideBarMenu.Commitment}>
        <LoaderPage />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout active={ActiveSideBarMenu.Commitment}>
      {showUpdatePopup && (
        <UpdateSchedule
          close={() => setShowUpdatePopup(false)}
          schedule={schedule}
          scheduleList={scheduleList}
          setScheduleList={setScheduleList}
        />
      )}
      {showCreatePopup && (
        <CreateSchedule
          close={() => setShowCreatePopup(false)}
          scheduleList={scheduleList}
          setScheduleList={setScheduleList}
        />
      )}
      <div className="schedule-container">
        <div className="schedule-header">
          <div className="schedule-page-info">
            <p className="title">Schedule Planner</p>
            <p className="desc">
              Organize your events and stay on track with a clear, monthly
              calendar view.
            </p>
          </div>
          <button
            className="add-schedule-btn"
            onClick={() => setShowCreatePopup(true)}
          >
            + New Schedule
          </button>
        </div>
        <div className="calendar-container">
          <div className="header">
            <button onClick={() => changeMonth(-1)}>◀</button>
            <h2>
              {currentDate.toLocaleString("default", {
                month: "long",
              })}{" "}
              {currentDate.getFullYear()}
            </h2>
            <button onClick={() => changeMonth(1)}>▶</button>
          </div>

          <div className="grid">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="day-header">
                {d}
              </div>
            ))}

            {days.map((d, i) => {
              const dateStr = d.date.toISOString().split("T")[0];
              const dayEvents = scheduleList.filter(
                (e) => e.date.toString().split("T")[0] === dateStr,
              );

              return (
                <DayCell
                  key={i}
                  day={d.date}
                  isCurrentMonth={d.current}
                  isToday={d.date.toDateString() === today.toDateString()}
                  events={dayEvents}
                  setSchedule={(sch) => {
                    setShowUpdatePopup(true);
                    setSchedule(sch);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SchedulesPage;
