import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../hooks/useContext";
import "./css/ProfileForm.css";
import { logout } from "./services/logout";
import Loader from "../../assets/icons/loader";
import { responseStatus } from "../../assets/enum/responseStatus";
import { updateStudent } from "./services/updateStudent";
  {/* ProfileForm component is used to render the profile page, and handle the update student information and logout logic, when user click the "update info" button, it will trigger the updateStudent service to send update request to the backend, if update successfully, it will update the student information in the context, if update failed, it will show the error message on the page, when user click the "Logout" button, it will trigger the logout service to send logout request to the backend, if logout successfully, it will clear the student information in the context and navigate to the login page, if logout failed, it will show the error message on the page */}
const ProfileForm = ({ student, setStudent, setLoading }) => {
  const navigateTo = useNavigate();
  const {
    handleId,
    name,
    id,
    setStudentGroups,
    activeGroup,
    setRun,
    setActiveGroup,
  } = useContext(Context);
  const [status, setStatus] = useState();
  const [studentCopy, setStudentCopy] = useState(student);
  const [activateUpdateButton, setActivateUpdateButton] = useState(false);
  {/* Handle logout by calling the logout service, and clear the student information in the context and navigate to the login page when logout successfully */}
  const handleLogout = async () => {
    if (status != responseStatus.PENDING) {
      await logout(setStatus, navigateTo, handleId);
      setStudentGroups([]);
      setActiveGroup({});
      setRun(false);
    }
  };
  {/* Handle update student information by calling the updateStudent service, and update the student information in the context when update successfully */}
  const handleUpdate = async () => {
    const data = {
      firstName: studentCopy.firstName,
      lastName: studentCopy.lastName,
      phoneNumber: studentCopy.phoneNumber,
      classLevel: studentCopy.classLevel,
    };
    if (activateUpdateButton) {
      await updateStudent(data, setLoading, id, setStudent);
    }
  };
  {/* Use useEffect to compare the student information in the form with the original student information, if there is any change, activate the update button, otherwise, deactivate the update button */}
  useEffect(() => {
    switch (true) {
      case student.firstName != studentCopy.firstName:
        setActivateUpdateButton(true);
        break;
      case student.lastName != studentCopy.lastName:
        setActivateUpdateButton(true);
        break;
      case student.email != studentCopy.email:
        setActivateUpdateButton(true);
        break;
      case student.classLevel != studentCopy.classLevel:
        setActivateUpdateButton(true);
        break;
      case student.phoneNumber != studentCopy.phoneNumber:
        setActivateUpdateButton(true);
        break;
      default:
        setActivateUpdateButton(false);
    }
  }, [studentCopy]);
  {/* Handle update student information by calling the updateStudent service, and update the student information in the context when update successfully */}
  return (
    <section className="profile">
      <div className="profile-inner">
        <div className="profile-header">
          <div className="avatar">
            <img src="Group 1000004098.png" alt="avatar" />
          </div>
          <div className="userInfo">
            <h2 className="username">{name}</h2>
            <p className="group-number">Group: {activeGroup.name}</p>
          </div>
          <div className="actions">
            <button onClick={handleLogout} className="btn cancel">
              {status == responseStatus.PENDING ? <Loader /> : <>Logout</>}
            </button>
            <button
              className="btn save"
              disabled={!activateUpdateButton}
              onClick={handleUpdate}
            >
              update info
            </button>
          </div>
        </div>
      </div>

      <form className="form">
        <div className="row">
          <div className="field">
            <label>First name</label>
            <input
              type="text"
              placeholder="Killian"
              value={studentCopy.firstName}
              onChange={(e) =>
                setStudentCopy({ ...studentCopy, firstName: e.target.value })
              }
            />
          </div>
          <div className="field">
            <label>Last name</label>
            <input
              type="text"
              placeholder="James"
              value={studentCopy.lastName}
              onChange={(e) =>
                setStudentCopy({ ...studentCopy, lastName: e.target.value })
              }
            />
          </div>
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="text"
            placeholder="killianjames@gmail.com"
            value={studentCopy.email}
          />
        </div>

        <div className="field">
          <label>Class Level</label>
          <select
            value={studentCopy.classLevel ?? ""}
            onChange={(e) =>
              setStudentCopy({ ...studentCopy, classLevel: e.target.value })
            }
          >
            <option value=""></option>
            <option value="undergraduate">Undergraduate</option>
            <option value="postgraduate">Postgraduate</option>
            <option value="doctorate">Doctorate</option>
          </select>
        </div>

        <div className="field">
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="+44 01234567"
            value={studentCopy.phoneNumber}
            onChange={(e) =>
              setStudentCopy({ ...studentCopy, phoneNumber: e.target.value })
            }
          />
        </div>
      </form>
    </section>
  );
};

export default ProfileForm;
