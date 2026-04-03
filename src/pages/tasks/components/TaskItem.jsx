import { useEffect, useState } from "react";
import { Category, Importance } from "../../../mock/taskList";
import { useNavigate } from "react-router-dom";

const TaskItem = ({ importance, title, groupName, desc, date, category }) => {
  const [style, setStyle] = useState({
    container: "",
    categ: "",
    imp: "",
  });

  const navigateTo = useNavigate();

  useEffect(() => {
    let newStyle = {
      container: "",
      categ: "",
      imp: "",
    };
    switch (true) {
      case Category.PENDING == category:
        newStyle = {
          ...newStyle,
          container: "pending",
          categ: "status-pending",
        };
        break;
      case Category.COMPLETE == category:
        newStyle = {
          ...newStyle,
          container: "completed",
          categ: "status-completed",
        };
        break;
      case Category.INPROGRESS == category:
        newStyle = {
          ...newStyle,
          container: "in-progress",
          categ: "status-in-progress",
        };
        break;
      case Category.OVERDUE == category:
        newStyle = {
          ...newStyle,
          container: "overdue",
          categ: "status-overdue",
        };
        break;
    }

    switch (true) {
      case Importance.HIGH == importance:
        newStyle = { ...newStyle, imp: "priority-high" };
        break;
      case Importance.MEDIUM == importance:
        newStyle = { ...newStyle, imp: "priority-medium" };
        break;
      case Importance.LOW == importance:
        newStyle = { ...newStyle, imp: "priority-low" };
        break;
    }

    setStyle(newStyle);
  }, []);

  return (
    <div
      className={"task-card " + style.container}
      onClick={() => {
        navigateTo("/task/detail");
      }}
    >
      <span className={"task-priority " + style.imp}>{importance}</span>
      <div className="task-header">
        <div>
          <div className="task-title">{title}</div>
          <div className="task-group">{groupName}</div>
        </div>
      </div>
      <div className="task-description">{desc}</div>
      <div className="task-meta">
        <div className="task-due">📅 {date}</div>
        <span className={"task-status " + style.categ}>{category}</span>
      </div>
    </div>
  );
};

export default TaskItem;
