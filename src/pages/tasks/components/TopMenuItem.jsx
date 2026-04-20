  {/* Component for the top menu item in GroupTasksPage, including "All Tasks", "My Tasks" and "Create Task" */}
const TopMenuItem = ({ name, active, onclick }) => {
  return (
    <button className={"tab " + active} onClick={onclick}>
      {name}
    </button>
  );
};

export default TopMenuItem;
