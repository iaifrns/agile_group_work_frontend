import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Context } from "../hooks/useContext";
import { checkToken } from "../helper/checkToken";

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
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
