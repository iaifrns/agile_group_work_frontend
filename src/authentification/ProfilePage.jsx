import Sidebar from "../authentification/Sidebar";
import Topbar from "../authentification/Topbar";
import Banner from "./Banner";
import ProfileForm from "../authentification/ProfileForm";

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
