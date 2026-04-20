import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Context } from "../hooks/useContext";
import { checkToken } from "../helper/checkToken";
import "../pages/authentification/css/login.css"
  {/* AuthLayout component is used to render the layout of the authentication page, it will check the token when component is mounted, if the token is valid, it will navigate to the profile page, if the token is invalid, it will stay on the login page */}
const AuthLayout = () => {
  const { id , handleId} = useContext(Context);
  const navigateTo = useNavigate();
  {/* Check the token when component is mounted, if the token is valid, it will navigate to the profile page, if the token is invalid, it will stay on the login page */}
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
