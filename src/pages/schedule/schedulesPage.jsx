import { useState } from "react";
import "./css/schdeuleList.css";
import DashboardLayout from "../../layout/Dashboard";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import CreateSchedule from "./components/CreateSchedule";

const mockEvents = [
  {
    title: "Team Meeting",
    description: "Discuss project updates",
    date: "2026-04-10",
  },
  {
    title: "Team Meeting with boss",
    description: "Discuss project updates",
    date: "2026-04-10",
  },
  {
    title: "Workout",
    description: "Gym session",
    date: "2026-04-10",
  },
  {
    title: "Client Call",
    description: "Zoom meeting with client",
    date: "2026-04-15",
  },
];

const EventCard = ({ event }) => (
  <div className="event-card">
    <div className="event-title">{event.title}</div>
    <div className="event-desc">{event.description}</div>
  </div>
);

const DayCell = ({ day, isCurrentMonth, isToday, events }) => {
  return (
    <div
      className={`day-cell ${!isCurrentMonth ? "faded" : ""} ${
        isToday ? "today" : ""
      }`}
    >
      <div className="day-number">{day.getDate()}</div>
      <div className="events">
        {events.map((event, i) => (
          <EventCard key={i} event={event} />
        ))}
      </div>
    </div>
  );
};

const SchedulesPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showCreatePopup, setShowCreatePopup] = useState(false);

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

  return (
    <DashboardLayout active={ActiveSideBarMenu.Commitment}>
      {showCreatePopup && (
        <CreateSchedule close={() => setShowCreatePopup(false)} />
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
              const dayEvents = mockEvents.filter((e) => e.date === dateStr);

              return (
                <DayCell
                  key={i}
                  day={d.date}
                  isCurrentMonth={d.current}
                  isToday={d.date.toDateString() === today.toDateString()}
                  events={dayEvents}
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
