import { useContext, useEffect, useState } from "react";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import { taskCategory } from "../../constants/taskCategory";
import { Context } from "../../hooks/useContext";
import DashboardLayout from "../../layout/Dashboard";
import { fakeTasks } from "../../mock/taskList";
import CreateTask from "./components/CreateTask";
import TaskInfoContainer from "./components/TaskInfoContainer";
import TaskItem from "./components/TaskItem";
import TopMenuItem from "./components/TopMenuItem";
import "./css/groupTaskList.css";
import { responseStatus } from "../../assets/enum/responseStatus";
import LoaderPage from "../../components/LoaderPage";
import { getGroupDetailInfo } from "../groups/services/getGroupDetailInfo";

const GroupTasksPage = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const { activeGroup } = useContext(Context);
  const [status, setStatus] = useState(responseStatus.PENDING);
  const [groupDetail, setGroupDetail] = useState();
  const [showPopup, setShowPopUp] = useState(false)

  useEffect(() => {
    getGroupDetailInfo(activeGroup.id, setStatus, setGroupDetail);
  }, [activeGroup]);

  if (status == responseStatus.PENDING) {
    return (
      <DashboardLayout active={ActiveSideBarMenu.Task}>
        <LoaderPage />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout active={ActiveSideBarMenu.Task}>
      {showPopup && 
      <CreateTask groupMembers={groupDetail.members} gid={groupDetail.id} close={()=>setShowPopUp(false)} />}
      <div className="main-content">
        <div className="page-header">
          <div className="page-title-section">
            <h1>Group Commitments</h1>
            <p className="page-subtitle">
              Manage and track your assignments and deadlines
            </p>
          </div>
          <button className="btn-add-task" onClick={()=>setShowPopUp(true)}>+ Add New Task</button>
        </div>

        <div className="stats-row">
          <TaskInfoContainer title={"Total Tasks"} icon={"📋"} desc={12} />

          <TaskInfoContainer title={"Completed"} icon={"✅"} desc={5} />

          <TaskInfoContainer title={"In Progress"} icon={"⏰"} desc={4} />

          <TaskInfoContainer title={"Total Tasks"} icon={"🔴"} desc={3} />
        </div>

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

        <div className="tasks-grid">
          {fakeTasks.map((task, ind) => (
            <TaskItem
              importance={task.importance}
              title={task.title}
              desc={task.desc}
              date={task.createdAt}
              category={task.category}
              key={ind + task.title}
              groupName={activeGroup.name}
            />
          ))}
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
