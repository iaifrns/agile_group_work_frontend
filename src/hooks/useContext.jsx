import { createContext, useState } from "react";

export const Context = createContext({
  id: "",
  handleId: (e) => {},
  name: "",
  handleName: (e) => {},
  studentGroups: [],
  setStudentGroups: (e) => {},
  activeGroup: {},
  setActiveGroup: (e) => {},
  run: false,
  setRun: (e) => {},
  notifications: [],
  setNotifications: (e) => {}
});

const ContextProvider = ({ children }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [studentGroups, setStudentGroups] = useState([]);
  const [activeGroup, setActiveGroup] = useState({});
  const [run, setRun] = useState(false);
  const [notifications, setNotifications] = useState([])

  return (
    <Context.Provider
      value={{
        id,
        handleId: setId,
        name,
        handleName: setName,
        studentGroups,
        setStudentGroups,
        activeGroup,
        setActiveGroup,
        run,
        setRun,
        setNotifications,
        notifications
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
