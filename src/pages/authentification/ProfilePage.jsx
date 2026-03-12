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

  useEffect(() => {
    getStudent();
  }, []);

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
