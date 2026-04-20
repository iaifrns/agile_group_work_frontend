import Banner from "./Banner";
import ProfileForm from "./ProfileForm";

import DashboardLayout from "../../layout/Dashboard";
import "./css/ProfilePage.css";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../hooks/useContext";
import LoaderPage from "../../components/LoaderPage";
import { responseStatus } from "../../assets/enum/responseStatus";
import { getAStudent } from "./services/getStudent";
  {/* ProfilePage component is used to render the profile page, it will fetch the student information when component is mounted, and pass the student information to the ProfileForm component, and handle the loading state when fetching student information */}
const ProfilePage = () => {
  const { id, handleName } = useContext(Context);
  const [status, setStatus] = useState(responseStatus.PENDING);
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    classLevel: "",
    phoneNumber: "",
  });

  const getStudent = async () => {
    await getAStudent(setStatus, handleName, setStudent, id);
  };
  {/* Fetch student information when component is mounted, and set the student information in the context */}
  useEffect(() => {
    getStudent();
  }, []);
  {/* Show loading when fetching student information, and show error message when fetch failed */}  
  return (
    <DashboardLayout active={ActiveSideBarMenu.Profile}>
      {status == responseStatus.PENDING ? (
        <LoaderPage />
      ) : (
        <>
          <Banner />
          <ProfileForm
            setStudent={setStudent}
            student={student}
            setLoading={setStatus}
          />
        </>
      )}
    </DashboardLayout>
  );
};

export default ProfilePage;
