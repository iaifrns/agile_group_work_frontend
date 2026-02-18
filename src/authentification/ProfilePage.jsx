import Sidebar from "../authentification/Sidebar";
import Topbar from "../authentification/Topbar";
import Banner from "../authentification/Banner";
import ProfileForm from "../authentification/ProfileForm";

import "./ProfilePage.css";

const ProfilePage = () => (
  <div className="app">
    <Sidebar />
    <main className="main">
      <Topbar />
      <Banner />
      <ProfileForm />
    </main>
  </div>
);

export default ProfilePage;
