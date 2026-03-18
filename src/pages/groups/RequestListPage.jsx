import { useEffect, useState } from "react";
import SearchIcon from "../../assets/icons/search";
import { InputWithIconOnRight } from "../../components/inputs";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import DashboardLayout from "../../layout/Dashboard";
import "./css/requestList.css";
import { stringToColor } from "../../services/generateColor";
import DeleteIcon from "../../assets/icons/delete";
import ConfirmationPopup from "../../components/ConfirmationPopup";
import { responseStatus } from "../../assets/enum/responseStatus";
import LoaderPage from "../../components/LoaderPage";
import { getStudentRequest } from "./services/getStudentRequest";
import { deleteRequest } from "./services/deleteARequest";
import NotfoundIcon from "../../assets/icons/notfound";

const RequestListPage = () => {
  const [searchText, setSearchText] = useState("");
  const [requestList, setRequestList] = useState([]);
  const [filteredRequestList, setFilteredRequestList] = useState([]);
  const [status, setStatus] = useState(responseStatus.PENDING);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState();
  const [requestId, setRequestId] = useState("");

  const handleDeleteRequest = (id) => {
    setShowConfirmPopup(true);
    setRequestId(id);
  };

  const handleDelete = () => {
    deleteRequest(
      setDeleteLoader,
      setRequestList,
      requestList,
      requestId,
      setShowConfirmPopup,
    );
  };

  useEffect(() => {
    getStudentRequest(setStatus, setRequestList);
  }, []);

  useEffect(() => {
    setFilteredRequestList(
      requestList.filter((item) =>
        item.group.name.toLowerCase().includes(searchText.toLowerCase()),
      ),
    );
  }, [requestList, searchText]);

  if (status == responseStatus.PENDING) {
    return (
      <DashboardLayout active={ActiveSideBarMenu.RequestList}>
        <LoaderPage />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout active={ActiveSideBarMenu.RequestList}>
      {showConfirmPopup && (
        <ConfirmationPopup
          message={"A you sure you want to delete this request"}
          close={() => setShowConfirmPopup(false)}
          confirm={handleDelete}
          loader={deleteLoader}
        />
      )}
      <div className="request-body">
        <div className="title-container">
          <p className="request-page-title">
            {ActiveSideBarMenu.RequestList.name}
          </p>
          <p className="request-page-desc">
            Stay updated on all your group join requests awaiting response.
          </p>
        </div>
        <div className="request-container">
          <InputWithIconOnRight
            placeholder={"search something ..."}
            Icon={SearchIcon}
            value={searchText}
            onchange={setSearchText}
          />
          <div className="request-list">
            {filteredRequestList.length < 1 && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <NotfoundIcon />
              </div>
            )}
            {filteredRequestList.map((item) => (
              <div className="request-item" key={item.id}>
                <div className="request-item-header">
                  <div
                    className="group-icon"
                    style={{ backgroundColor: stringToColor(item.group.name) }}
                  >
                    {item.group.name.slice(0, 2)}
                  </div>
                  <div>
                    <p className="title-text">{item.group.name}</p>
                    <p className="desc-text">Pending ...</p>
                  </div>
                </div>
                <button
                  className="delete-request-btn"
                  onClick={() => handleDeleteRequest(item.id)}
                >
                  <DeleteIcon c={"white"} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RequestListPage;
