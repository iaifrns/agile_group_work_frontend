import { useContext, useEffect, useState } from "react";
import TaskIcon from "../../assets/icons/Task";
import ComitmentIcon from "../../assets/icons/comitment";
import GrouplistIcon from "../../assets/icons/grouplist";
import { ActiveSideBarMenu } from "../../constants/activeSideBarMenu";
import { Context } from "../../hooks/useContext";
import DashboardLayout from "../../layout/Dashboard";
import "./css/dashboard.css";
import { useNavigate } from "react-router-dom";
import TasksDisplay from "./components/TasksDisplay";
import { responseStatus } from "../../assets/enum/responseStatus";
import LoaderPage from "../../components/LoaderPage";
import { getAllTasks } from "./services/getTasks";
import { getSchedules } from "../schedule/service/getSchedules";
import SchedulesDisplay from "./components/SchedulesDisplay";

const menu_list = {
  MyTask: { title: "See All Task", link: "/task/my_task_list" },
  GroupTask: { title: "See All Task", link: "/task/list" },
  Schedule: { title: "See All Schedule", link: "/schedule" },
};

const DashboardPage = () => {
  const { name, studentGroups } = useContext(Context);
  const [menu, setMenu] = useState(menu_list.MyTask);
  const navigateTo = useNavigate();
  const [status, setStatus] = useState(responseStatus.PENDING);
  const [tasks, setTasks] = useState();
  const [schedules, setSchedules] = useState();
  const [countData, setCountData] = useState({
    pTask: {
      title: "Number of Personal Task",
      num: 45,
      icon: TaskIcon,
    },
    gTask: {
      title: "Number of Group Task",
      num: 23,
      icon: TaskIcon,
    },
    shedule: {
      title: "Upcoming Schedules",
      num: 0,
      icon: ComitmentIcon,
    },
    groupNum: {
      title: "Number of Groups In",
      num: studentGroups.length,
      icon: GrouplistIcon,
    },
  });

  useEffect(() => {
    Promise.all([
      getAllTasks(setStatus, setTasks),
      getSchedules(setStatus, setSchedules),
    ]);
  }, []);

  useEffect(() => {
    if (tasks) {
      setCountData({
        ...countData,
        pTask: { ...countData.pTask, num: tasks.length },
        gTask: {
          ...countData.gTask,
          num: tasks.filter((item) => item.type == "GROUP").length,
        },
      });
    }
    if(schedules){
        setCountData({...countData, shedule: {...countData.shedule, num: schedules.length}})
    }
  }, [status, tasks, schedules]);

  const handleTaskList = () => {
    if (menu == menu_list.MyTask) {
      return tasks.filter((item) => item.type == "PERSONAL");
    }
    if (menu == menu_list.GroupTask) {
      return tasks.filter((item) => item.type == "GROUP");
    }
  };

  if (status == responseStatus.PENDING || !schedules || !tasks) {
    return (
      <DashboardLayout active={ActiveSideBarMenu.Dashboard}>
        <LoaderPage />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout active={ActiveSideBarMenu.Dashboard}>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <p className="d-title">Hi, {name}</p>
          <p>Stay on top of your tasks, monitor progress, and track status.</p>
        </div>
        <div className="d-primary-info">
          {Object.values(countData).map((item, ind) => (
            <div className="d-info-container" key={ind + item.title}>
              <div className="d-icon">
                <item.icon c={"white"} />
              </div>
              <div className="d-info">
                <p className="d-num">{item.num}</p>
                <p className="d-title">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="d-slide-header">
          <div className="d-menu-list">
            <button
              className="d-menu-btn"
              style={{ backgroundColor: menu == menu_list.MyTask && "#364153" }}
              onClick={() => setMenu(menu_list.MyTask)}
            >
              <p>Personal Commitment</p>
            </button>
            <button
              className="d-menu-btn"
              style={{
                backgroundColor: menu == menu_list.GroupTask && "#364153",
              }}
              onClick={() => setMenu(menu_list.GroupTask)}
            >
              <p>Group Commitment</p>
            </button>
            <button
              className="d-menu-btn"
              style={{
                backgroundColor: menu == menu_list.Schedule && "#364153",
              }}
              onClick={() => setMenu(menu_list.Schedule)}
            >
              <p>Schedules</p>
            </button>
          </div>
          <button className="d-btn" onClick={() => navigateTo(menu.link)}>
            {menu.title}
          </button>
        </div>
        {menu != menu_list.Schedule && (
          <TasksDisplay taskList={handleTaskList()} />
        )}
        {menu == menu_list.Schedule && (
          <SchedulesDisplay scheduleList={schedules} />
        )}
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
