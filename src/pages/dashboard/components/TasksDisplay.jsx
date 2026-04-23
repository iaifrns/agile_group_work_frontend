import { useEffect, useState } from "react";
import TodoIcon from "../../../assets/icons/todoIcon";
import DoneIcon from "../../../assets/icons/doneIcon";
import InProgressIcon from "../../../assets/icons/inProgressIcon";
import "../css/dTaskList.css";
import TaskItem from "./TaskItem";

const TasksDisplay = ({ taskList }) => {
  const [tasks, setTasks] = useState({
    todo: { name: "Todo", list: [], icon: TodoIcon, color: "#5865f2" },
    progress: {
      name: "In Progress",
      list: [],
      icon: InProgressIcon,
      color: "#faa61a",
    },
    done: { name: "Done", list: [], icon: DoneIcon, color: "#57f287" },
  });
  useEffect(() => {
    console.log(taskList);
    setTasks({
      ...tasks,
      todo: {
        ...tasks.todo,
        list: taskList.filter((item) => item.status == "TODO"),
      },
      progress: {
        ...tasks.progress,
        list: taskList.filter((item) => item.status == "INPROGRESS"),
      },
      done: {
        ...tasks.done,
        list: taskList.filter((item) => item.status == "DONE"),
      },
    });
  }, [taskList]);
  return (
    <div className="d-task-container">
      {Object.values(tasks).map((task, ind) => (
        <div className="d-task-list">
          <div className="d-task-list-title" key={ind + task.name}>
            {/* icon */}
            <task.icon c={task.color} />
            {/* name */}
            <p className="d-t-name">{task.name}</p>
          </div>
          {task.list.map((item) => (
            <TaskItem
              importance={item.category}
              title={item.title}
              desc={item.desc}
              date={item.dueDate.toString().split("T")[0]}
              category={item.status}
              key={ind + item.title}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TasksDisplay;
