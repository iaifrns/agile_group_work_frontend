  {/* Component for showing task information in the task list, including icon, title and description */}
const TaskInfoContainer = ({icon, title, desc}) => {
    return (
        <div className="stat-card">
            <div className="stat-icon blue">{icon}</div>
            <div className="stat-info">
              <div className="stat-label">{title}</div>
              <div className="stat-value">{desc}</div>
            </div>
          </div>
    );
}

export default TaskInfoContainer;
