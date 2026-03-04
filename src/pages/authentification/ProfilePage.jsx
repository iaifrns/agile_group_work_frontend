import Banner from "./Banner";
import ProfileForm from "./ProfileForm";

import DashboardLayout from "../../layout/Dashboard";
import "./css/ProfilePage.css";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";

const ProfilePage = () => (
  <DashboardLayout active={ActiveSideBarMenu.Profile}>
    <Banner />
    <ProfileForm />
  </DashboardLayout>
);

export default ProfilePage;
