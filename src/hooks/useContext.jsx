import { createContext, useState } from "react";

export const Context = createContext({
  id: "",
  handleId: (e) => {},
  name: "",
  handleName: (e) => {},
  studentGroups: [],
  setStudentGroups: (e) => {},
  run: false,
  setRun: (e) => {},
});

const ContextProvider = ({ children }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [studentGroups, setStudentGroups] = useState([]);
  const [run, setRun] = useState(false);

  return (
    <Context.Provider
      value={{
        id,
        handleId: setId,
        name,
        handleName: setName,
        studentGroups,
        setStudentGroups,
        run,
        setRun,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
