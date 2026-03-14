import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../hooks/useContext";
import "./css/ProfileForm.css";
import { logout } from "./services/logout";
import Loader from "../../assets/icons/loader";
import { responseStatus } from "../../assets/enum/responseStatus";
import { updateStudent } from "./services/updateStudent";

const ProfileForm = ({ student, setStudent, setLoading }) => {
  const navigateTo = useNavigate();
  const { handleId, name, id, setStudentGroups } = useContext(Context);
  const [status, setStatus] = useState();
  const [studentCopy, setStudentCopy] = useState(student);
  const [activateUpdateButton, setActivateUpdateButton] = useState(false);

  const handleLogout = async () => {
    if (status != responseStatus.PENDING) {
      await logout(setStatus, navigateTo, handleId);
      setStudentGroups([])
    }
  };

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

  return (
    <section className="profile">
      <div className="profile-inner">
        <div className="profile-header">
          <div className="avatar">
            <img src="Group 1000004098.png" alt="avatar" />
          </div>
          <div className="user-info">
            <h2 className="username">{name}</h2>
            <p className="group-number">Group Number: 7</p>
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
