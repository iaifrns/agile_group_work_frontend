import { createContext, useState } from "react";

export const Context = createContext({
  id: "",
  handleId: (e) => {},
  name: "",
  handleName: (e) => {},
});

const ContextProvider = ({ children }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  return (
    <Context.Provider
      value={{ id, handleId: setId, name, handleName: setName }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
