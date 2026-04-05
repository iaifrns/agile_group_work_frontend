import { useContext, useEffect, useState } from "react";
import { responseStatus } from "../../assets/enum/responseStatus";
import EmptyListIcon from "../../assets/icons/emptyList";
import LoaderPage from "../../components/LoaderPage";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import { taskCategory, TaskType } from "../../constants/taskCategory";
import { TaskSTatus } from "../../constants/taskStatus";
import { Context } from "../../hooks/useContext";
import DashboardLayout from "../../layout/Dashboard";
import CreateTask from "./components/CreateTask";
import TaskInfoContainer from "./components/TaskInfoContainer";
import TaskItem from "./components/TaskItem";
import TopMenuItem from "./components/TopMenuItem";
import "./css/groupTaskList.css";
import { getAllTask } from "./services/getAllTask";
import { getAStudent } from "../authentification/services/getStudent";

const today = new Date();

const MyTaskPage = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const { activeGroup, id, handleName } = useContext(Context);
  const [status, setStatus] = useState(responseStatus.PENDING);
  const [showPopup, setShowPopUp] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [student, setStudent] = useState();

  useEffect(() => {
    Promise.all([
      getAllTask(setStatus, setTaskList, TaskType.personal),
      getAStudent(setStatus, handleName, setStudent, id),
    ]);
  }, [activeGroup]);

  useEffect(() => {
    setFilteredList(taskList);
  }, [taskList]);

  const handleFilterTask = () => {
    if (activeMenu == 0) {
      return filteredList;
    } else if (activeMenu == 1) {
      return filteredList.filter((task) => task.status == TaskSTatus.TODO);
    } else if (activeMenu == 2) {
      return filteredList.filter(
        (task) => task.status == TaskSTatus.INPROGRESS,
      );
    } else if (activeMenu == 3) {
      return filteredList.filter((task) => task.status == TaskSTatus.COMPLETED);
    } else if (activeMenu == 4) {
      return filteredList.filter((task) => task.due < today);
    }
  };

  if (status == responseStatus.PENDING && !student) {
    return (
      <DashboardLayout active={ActiveSideBarMenu.MyCommitment}>
        <LoaderPage />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout active={ActiveSideBarMenu.MyCommitment}>
      {showPopup && (
        <CreateTask
          groupMembers={[{id: id, student}]}
          close={() => setShowPopUp(false)}
          tasks={taskList}
          setTasks={setTaskList}
          type={TaskType.personal}
        />
      )}
      <div className="main-content">
        <div className="page-header">
          <div className="page-title-section">
            <h1>My Commitments</h1>
            <p className="page-subtitle">
              Manage and track your assignments and deadlines
            </p>
          </div>
          <button className="btn-add-task" onClick={() => setShowPopUp(true)}>
            + Add New Task
          </button>
        </div>

        <div className="stats-row">
          <TaskInfoContainer
            title={"Total Tasks"}
            icon={"📋"}
            desc={filteredList.length}
          />

          <TaskInfoContainer
            title={"Completed"}
            icon={"✅"}
            desc={
              filteredList.filter((task) => task.status == TaskSTatus.COMPLETED)
                .length
            }
          />

          <TaskInfoContainer
            title={"In Progress"}
            icon={"⏰"}
            desc={
              filteredList.filter(
                (task) => task.status == TaskSTatus.INPROGRESS,
              ).length
            }
          />

          <TaskInfoContainer
            title={"Overdue"}
            icon={"🔴"}
            desc={filteredList.filter((task) => task.due < today).length}
          />
        </div>

        <div className="filter-task-container">
          <div className="filter-tabs">
            {taskCategory.map((text, ind) => (
              <TopMenuItem
                name={text}
                key={ind}
                active={ind == activeMenu && "active"}
                onclick={() => setActiveMenu(ind)}
              />
            ))}
          </div>
        </div>

        <div className="tasks-grid">
          {handleFilterTask().length < 1 ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <EmptyListIcon />
              <p style={{ fontSize: "24px" }}>Empty list</p>
            </div>
          ) : (
            <>
              {handleFilterTask().map((task, ind) => (
                <TaskItem
                  importance={task.category}
                  title={task.title}
                  desc={task.desc}
                  date={task.due.toString().split("T")[0]}
                  category={task.status}
                  key={ind + task.title}
                  groupName={activeGroup.name}
                  id={task.id}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MyTaskPage;
