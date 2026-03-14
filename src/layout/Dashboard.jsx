import Sidebar from "../pages/authentification/Sidebar";
import Topbar from "../pages/authentification/Topbar";


import "../pages/authentification/css/ProfilePage.css";

const DashboardLayout = ({ children, active }) => {

  return (
    <div className="app">
      <Sidebar active={active} />
      <main className="main">
        <Topbar />
        <div className="scroll">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
