import { createContext, useState } from "react";

export const Context = createContext({ id: "", handleId: (e) => {} });

const ContextProvider = ({ children }) => {
  const [id, setId] = useState("");

  const handleId = (v) => setId(v);

  //checkToken(handleId)

  return (
    <Context.Provider value={{ id, handleId }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
