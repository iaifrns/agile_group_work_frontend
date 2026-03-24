import { useEffect, useState } from "react";
import CloseIcon from "../../../assets/icons/close";
import { stringToColor } from "../../../services/generateColor";
import "../css/studentAddMemberList.css";
import { responseStatus } from "../../../assets/enum/responseStatus";
import LoaderPage from "../../../components/LoaderPage";
import { getStudentNotInGroup } from "../services/getStudentsNotInGroup";
import { addMember } from "../services/addMember";

const StudentAddMemberList = ({ groupId, close, setGroupDetail, groupDetail }) => {
  const [studentList, setStudentList] = useState([]);
  const [filteredStudentList, setFilteredStudentList] = useState([]);
  const [loader, setLoader] = useState(responseStatus.PENDING);
  const [searchText, setSearchText] = useState("");
  const [showHighlight, setShowHighLight] = useState("");
  const [confirmMember, setConfirmMember] = useState(false);
  const [student, setStudent] = useState()

  useEffect(() => {
    getStudentNotInGroup(setLoader, setStudentList, groupId);
  }, []);

  useEffect(() => {
    setFilteredStudentList(
      studentList.filter(
        (item) =>
          (item.firstName + " " + item.lastName)
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()) ||
          item.email.includes(searchText),
      ),
    );
  }, [studentList, searchText]);

  const handleConfirmAddMember = () => {
    addMember(setLoader, student, groupId, close, groupDetail, setGroupDetail)
  }

  if (loader == responseStatus.PENDING) {
    return (
      <div className="popup-container">
        <div className="students-popup">
          <LoaderPage />
        </div>
      </div>
    );
  }

  if (confirmMember) {
    return (
      <div className="popup-container">
        <div className="students-popup">
          <div className="close-popup">
            <div onClick={close}>
              <CloseIcon c={"white"} />
            </div>
          </div>
          <div>
            <p className="verification-message">Add {student.firstName + ' ' + student.lastName} as Member ?</p>
          </div>
          <div className="popup-buttons-student">
            <button className="cancel-button" onClick={()=>setConfirmMember(false)}>Cancel</button>
            <button className="confirm-button" onClick={handleConfirmAddMember}>Confirm</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="popup-container">
      <div className="students-popup">
        <div className="close-popup">
          <div onClick={close}>
            <CloseIcon c={"white"} />
          </div>
        </div>
        <input
          type="text"
          className="student-recherge"
          placeholder="Search for a member ..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <div className="student-list-popup">
          {studentList.length < 1 ? (
            <p>No Student Found ...</p>
          ) : (
            <>
              {filteredStudentList.map((item, ind) => (
                <div
                  key={item.id + ind}
                  className="student-item-popup"
                  onMouseEnter={() => setShowHighLight(item.id)}
                  onMouseLeave={() => setShowHighLight("")}
                  onClick={()=>{
                    setConfirmMember(true)
                    setStudent(item)
                  }}
                >
                  <div
                    className="student-avatar"
                    style={{
                      backgroundColor: stringToColor(
                        item.firstName + item.lastName,
                      ),
                    }}
                  >
                    {item.firstName.slice(0, 2)}
                  </div>
                  <div className="student-info-popup">
                    <p className="student-name">
                      {item.firstName + " " + item.lastName}
                    </p>
                    <p className="student-email">{item.email}</p>
                  </div>
                  {showHighlight == item.id && (
                    <p className="highlight-popup">+ add member</p>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentAddMemberList;
