import { createContext, useState } from "react";
  {/* This file contains the Context and ContextProvider components, which are used to create a context for the application, and provide the context to the children components, the context contains the student information, student group information, active group information, notification information and some functions to update the context */}
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
  {/* ContextProvider component is used to provide the context to the children components, it will initialize the context with the default values, and also provide the functions to update the context */}
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
