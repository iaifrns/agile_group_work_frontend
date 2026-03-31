import { useContext, useState } from "react";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import { taskCategory } from "../../constants/taskCategory";
import DashboardLayout from "../../layout/Dashboard";
import TaskInfoContainer from "./components/TaskInfoContainer";
import TopMenuItem from "./components/TopMenuItem";
import "./css/groupTaskList.css";
import { fakeTasks } from "../../mock/taskList";
import TaskItem from "./components/TaskItem";
import { Context } from "../../hooks/useContext";

const GroupTasksPage = () => {
  const [activeMenu, setActiveMenu] = useState(0);
  const {activeGroup} = useContext(Context)
  return (
    <DashboardLayout active={ActiveSideBarMenu.Task}>
      <div className="main-content">
        <div className="page-header">
          <div className="page-title-section">
            <h1>My Tasks</h1>
            <p className="page-subtitle">
              Manage and track your assignments and deadlines
            </p>
          </div>
          <button className="btn-add-task">+ Add New Task</button>
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
              key={ind+task.title}
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
