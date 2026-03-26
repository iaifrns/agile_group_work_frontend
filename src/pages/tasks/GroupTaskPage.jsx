const GroupTasksPage = () => {
  return (
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
        <div className="stat-card">
          <div className="stat-icon blue">📋</div>
          <div className="stat-info">
            <div className="stat-label">Total Tasks</div>
            <div className="stat-value">12</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">✅</div>
          <div className="stat-info">
            <div className="stat-label">Completed</div>
            <div className="stat-value">5</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">⏰</div>
          <div className="stat-info">
            <div className="stat-label">In Progress</div>
            <div className="stat-value">4</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon red">🔴</div>
          <div className="stat-info">
            <div className="stat-label">Overdue</div>
            <div className="stat-value">3</div>
          </div>
        </div>
      </div>

      <div className="filter-tabs">
        <button className="tab active" onclick="filterTasks('all')">
          All Tasks
        </button>
        <button className="tab" onclick="filterTasks('pending')">
          Pending
        </button>
        <button className="tab" onclick="filterTasks('in-progress')">
          In Progress
        </button>
        <button className="tab" onclick="filterTasks('completed')">
          Completed
        </button>
        <button className="tab" onclick="filterTasks('overdue')">
          Overdue
        </button>
      </div>

      <div className="tasks-grid">
        <div className="task-card pending">
          <span className="task-priority priority-high">High Priority</span>
          <div className="task-header">
            <div>
              <div className="task-title">Database Design Document</div>
              <div className="task-group">CS301 Project Team Alpha</div>
            </div>
          </div>
          <div className="task-description">
            Create a comprehensive database schema design including ER diagrams,
            normalization analysis, and implementation plan.
          </div>
          <div className="task-meta">
            <div className="task-due">📅 Due: Mar 15, 2026</div>
            <span className="task-status status-pending">Pending</span>
          </div>
        </div>

        <div className="task-card in-progress">
          <span className="task-priority priority-medium">Medium Priority</span>
          <div className="task-header">
            <div>
              <div className="task-title">Frontend Prototype Review</div>
              <div className="task-group">Web Development Study Group</div>
            </div>
          </div>
          <div className="task-description">
            Review and provide feedback on the React prototype developed by the
            team. Focus on UI/UX improvements.
          </div>
          <div className="task-meta">
            <div className="task-due">📅 Due: Mar 18, 2026</div>
            <span className="task-status status-in-progress">In Progress</span>
          </div>
        </div>

        <div className="task-card completed">
          <span className="task-priority priority-low">Low Priority</span>
          <div className="task-header">
            <div>
              <div className="task-title">Data Cleaning Script</div>
              <div className="task-group">Data Analytics Team</div>
            </div>
          </div>
          <div className="task-description">
            Write Python script to clean and preprocess the survey data
            collected from students.
          </div>
          <div className="task-meta">
            <div className="task-due">✅ Completed: Mar 10, 2026</div>
            <span className="task-status status-completed">Completed</span>
          </div>
        </div>

        <div className="task-card overdue">
          <span className="task-priority priority-high">High Priority</span>
          <div className="task-header">
            <div>
              <div className="task-title">Research Paper Draft</div>
              <div className="task-group">AI Research Collaboration</div>
            </div>
          </div>
          <div className="task-description">
            Complete the first draft of the research paper on machine learning
            applications in healthcare.
          </div>
          <div className="task-meta">
            <div className="task-due">⚠️ Due: Mar 5, 2026</div>
            <span className="task-status status-overdue">Overdue</span>
          </div>
        </div>

        <div className="task-card pending">
          <span className="task-priority priority-medium">Medium Priority</span>
          <div className="task-header">
            <div>
              <div className="task-title">Team Meeting Preparation</div>
              <div className="task-group">CS301 Project Team Alpha</div>
            </div>
          </div>
          <div className="task-description">
            Prepare agenda and presentation slides for the weekly team meeting.
            Include progress updates and next steps.
          </div>
          <div className="task-meta">
            <div className="task-due">📅 Due: Mar 14, 2026</div>
            <span className="task-status status-pending">Pending</span>
          </div>
        </div>

        <div className="task-card in-progress">
          <span className="task-priority priority-high">High Priority</span>
          <div className="task-header">
            <div>
              <div className="task-title">API Integration</div>
              <div className="task-group">Web Development Study Group</div>
            </div>
          </div>
          <div className="task-description">
            Integrate third-party payment API into the e-commerce platform. Test
            all endpoints and error handling.
          </div>
          <div className="task-meta">
            <div className="task-due">📅 Due: Mar 20, 2026</div>
            <span className="task-status status-in-progress">In Progress</span>
          </div>
        </div>
      </div>
      <script>
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
    </script>
    </div>
  );
};

export default GroupTasksPage;
