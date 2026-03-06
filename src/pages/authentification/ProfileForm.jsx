import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../hooks/useContext";
import "./css/ProfileForm.css";
import { logout } from "./services/logout";

const ProfileForm = ({ student }) => {
  const navigateTo = useNavigate();
  const { handleId, name } = useContext(Context);
  const [status, setStatus] = useState();
  const [studentCopy, setStudentCopy] = useState(student);

  const handleLogout = async () => {
    await logout(setStatus, navigateTo, handleId);
  };

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
              Logout
            </button>
            <button className="btn save">update info</button>
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
            onChange={(e) =>
              setStudentCopy({ ...studentCopy, email: e.target.value })
            }
          />
        </div>

        <div className="field">
          <label>Class Level</label>
          <input
            type="text"
            placeholder="Undergraduate, Postgraduate..."
            value={studentCopy.classLevel ?? ""}
            onChange={(e) =>
              setStudentCopy({ ...studentCopy, classLevel: e.target.value })
            }
          />
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
