import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [id, setId] = useState("");

  const handleId = (v) => setId(v);

  return (
    <Context.Provider value={{ id, handleId }}>{children}</Context.Provider>
  );
};

export default ContextProvider
