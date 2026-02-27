import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Banner from "./Banner";
import ProfileForm from "./ProfileForm";

import "./css/ProfilePage.css";

const ProfilePage = () => (
  <div className="app">
    <Sidebar />
    <main className="main">
      <Topbar />
      <div className="scroll">
        <Banner />
        <ProfileForm />
      </div>
    </main>
  </div>
);

export default ProfilePage;
