import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskPriority, TaskSTatus } from "../../../constants/taskStatus";
  {/* Component for showing task information in the task list, including icon, title and description */}
const TaskItem = ({
  importance,
  title,
  groupName,
  desc,
  date,
  category,
  id,
}) => {
  const [style, setStyle] = useState({
    container: "",
    categ: "",
    imp: "",
  });

  const navigateTo = useNavigate();
  {/* Set the style of the task card based on the task status and priority */}
  useEffect(() => {
    let newStyle = {
      container: "",
      categ: "",
      imp: "",
    };
    switch (true) {
      case TaskSTatus.TODO == category:
        newStyle = {
          ...newStyle,
          container: "pending",
          categ: "status-pending",
        };
        break;
      case TaskSTatus.COMPLETED == category:
        newStyle = {
          ...newStyle,
          container: "completed",
          categ: "status-completed",
        };
        break;
      case TaskSTatus.INPROGRESS == category:
        newStyle = {
          ...newStyle,
          container: "in-progress",
          categ: "status-in-progress",
        };
        break;
      case "overdue" == category:
        newStyle = {
          ...newStyle,
          container: "overdue",
          categ: "status-overdue",
        };
        break;
    }

    switch (true) {
      case TaskPriority.EXERCISE == importance:
        newStyle = { ...newStyle, imp: "priority-high" };
        break;
      case TaskPriority.PROJECT_WORK == importance:
        newStyle = { ...newStyle, imp: "priority-medium" };
        break;
      case TaskPriority.READING == importance:
        newStyle = { ...newStyle, imp: "priority-low" };
        break;
      case TaskPriority.REVISION == importance:
        newStyle = { ...newStyle, imp: "priority-revision" };
        break;
    }

    setStyle(newStyle);
  }, []);

  return (
    <div
      className={"task-card " + style.container}
      onClick={() => {
        navigateTo("/task/detail/"+id);
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
