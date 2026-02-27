import "./css/Sidebar.css";

const icons = ["Group 1.png","Group 3.png","Group 4.png","Group 5.png","Group 6.png","Group 7.png"];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="Group 9.png" alt="logo" />
        <span>OCTOM.</span>
      </div>
      <nav className="nav">
        {icons.map((icon, idx) => (
          <span key={idx} className={`nav-item ${idx === 3 ? "active" : ""}`}>
            <img src={icon} alt={idx + 1} />
          </span>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;