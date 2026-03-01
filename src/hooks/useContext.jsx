import { createContext, useState } from "react";

export const Context = createContext({id: '', handleId: (e) => {}});

const ContextProvider = ({ children }) => {
  const [id, setId] = useState("");

  return (
    <Context.Provider value={{ id, handleId:setId }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
