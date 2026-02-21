import { createContext, useState } from "react";
import { checkToken } from "../helper/checkToken";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [id, setId] = useState("");

  const handleId = (v) => setId(v);

  //checkToken(handleId)

  return (
    <Context.Provider value={{ id, handleId }}>{children}</Context.Provider>
  );
};

export default ContextProvider
