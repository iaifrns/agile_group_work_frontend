import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Context } from "../hooks/useContext";
import { checkToken } from "../helper/checkToken";
import "../pages/authentification/css/login.css"

const AuthLayout = () => {
  const { id , handleId} = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    checkToken(handleId, navigateTo)
    if(id){
      navigateTo('/profile')
    }
  }, []);

  return (
    <div className="body">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
