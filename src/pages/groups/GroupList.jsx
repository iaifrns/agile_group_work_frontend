import { useEffect, useState } from "react";
import AddIcon from "../../assets/icons/add";
import SearchIcon from "../../assets/icons/search";
import { ButtonWithIconOnLeft } from "../../components/buttons";
import { InputWithIconOnRight } from "../../components/inputs";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import DashboardLayout from "../../layout/Dashboard";
import { fakeGroupList } from "../../mock/groupList";
import GroupItem from "./components/GroupItem";

import "./css/groupList.css";
import NotfoundIcon from "../../assets/icons/notfound";

const GroupList = () => {
  const [searchText, setSearchText] = useState("");
  const [filterGroupList, setFilterGroupList] = useState([]);

  useEffect(() => {
    setFilterGroupList(
      fakeGroupList.filter((name) =>
        name.toLocaleLowerCase().includes(searchText.toLowerCase()),
      ),
    );
  }, [searchText]);

  return (
    <DashboardLayout active={ActiveSideBarMenu.GroupList}>
      <div className="body">
        <div className="page_container">
          <div className="header_container">
            <InputWithIconOnRight
              placeholder={"search something ..."}
              Icon={SearchIcon}
              value={searchText}
              onchange={setSearchText}
            />
            <ButtonWithIconOnLeft text={"Create Group"} Icon={AddIcon} />
          </div>
          {filterGroupList.length == 0 ? (
            <div className="empty_group_list">
              <NotfoundIcon />
            </div>
          ) : (
            <div className="group_list_display">
              {filterGroupList.map((item, ind) => (
                <GroupItem name={item} id={ind} />
              ))}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GroupList;
