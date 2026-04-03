import { useContext, useEffect, useState } from "react";
import { responseStatus } from "../../assets/enum/responseStatus";
import EmptyListIcon from "../../assets/icons/emptyList";
import LoaderPage from "../../components/LoaderPage";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import { taskCategory } from "../../constants/taskCategory";
import { TaskSTatus } from "../../constants/taskStatus";
import { Context } from "../../hooks/useContext";
import DashboardLayout from "../../layout/Dashboard";
import { getGroupDetailInfo } from "../groups/services/getGroupDetailInfo";
import CreateTask from "./components/CreateTask";
import TaskInfoContainer from "./components/TaskInfoContainer";
import TaskItem from "./components/TaskItem";
import TopMenuItem from "./components/TopMenuItem";
import "./css/groupTaskList.css";
import { getAllTask } from "./services/getAllTask";

const today = new Date();

const GroupTasksPage = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const { activeGroup, id } = useContext(Context);
  const [status, setStatus] = useState(responseStatus.PENDING);
  const [groupDetail, setGroupDetail] = useState();
  const [showPopup, setShowPopUp] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isGroupFilter, setIsGroupFilter] = useState(true);

  useEffect(() => {
    Promise.all([
      getGroupDetailInfo(activeGroup.id, setStatus, setGroupDetail),
      getAllTask(setStatus, setTaskList),
    ]);
  }, [activeGroup]);

  useEffect(() => {
    if (isGroupFilter) {
      setFilteredList(taskList);
    } else {
      setFilteredList(
        taskList.filter((task) =>
          task.students.some((student) => student.id === id),
        ),
      );
    }
  }, [isGroupFilter, taskList]);

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

  if (status == responseStatus.PENDING || !groupDetail) {
    return (
      <DashboardLayout active={ActiveSideBarMenu.Task}>
        <LoaderPage />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout active={ActiveSideBarMenu.Task}>
      {showPopup && (
        <CreateTask
          groupMembers={groupDetail.members}
          gid={groupDetail.id}
          close={() => setShowPopUp(false)}
          tasks={taskList}
          setTasks={setTaskList}
        />
      )}
      <div className="main-content">
        <div className="page-header">
          <div className="page-title-section">
            <h1>Group Commitments</h1>
            <p className="page-subtitle">
              Manage and track your assignments and deadlines
            </p>
          </div>
          {groupDetail.admin == id && (
            <button className="btn-add-task" onClick={() => setShowPopUp(true)}>
              + Add New Task
            </button>
          )}
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
          <div className="filter-identity">
            <button
              className={`tab ${isGroupFilter && "active"}`}
              onClick={() => setIsGroupFilter(true)}
            >
              Group Task
            </button>
            <button
              className={`tab ${!isGroupFilter && "active"}`}
              onClick={() => setIsGroupFilter(false)}
            >
              My Task
            </button>
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
        {/* <script>
        // User menu dropdown toggle
        const userMenu = document.getElementById('userMenu');
        
        userMenu.addEventListener('click', function(e) {
            if (!e.target.closest('.dropdown-item')) {
                this.classList.toggle('active');
            }
        });

        document.addEventListener('click', function(e) {
            if (!userMenu.contains(e.target)) {
                userMenu.classList.remove('active');
            }
        });

        // Filter tabs
        function filterTasks(filter) {
            const tabs = document.querySelectorAll('.tab');
            const cards = document.querySelectorAll('.task-card');
            
            // Update active tab
            tabs.forEach(tab => tab.classList.remove('active'));
            event.target.classList.add('active');
            
            // Filter cards
            cards.forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else {
                    if (card.classList.contains(filter)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        }

        // Add task button
        document.querySelector('.btn-add-task').addEventListener('click', function() {
            alert('Add new task functionality would open a modal here.');
        });

        // Task card click
        document.querySelectorAll('.task-card').forEach(card => {
            card.addEventListener('click', function() {
                alert('Task details would open here.');
            });
        });
    </script> */}
      </div>
    </DashboardLayout>
  );
};

export default GroupTasksPage;
