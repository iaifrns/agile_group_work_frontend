import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { responseStatus } from "../assets/enum/responseStatus";
import Loader from "../assets/icons/loader";
import { Context } from "../hooks/useContext";
import { checkToken } from "../services/checkToken";

const AuthLayout = () => {
  const { handleId, id:glocalId } = useContext(Context);
  const navigateTo = useNavigate();
  const [status, setStatus] = useState();
  const [id, setId] = useState(glocalId);

  useEffect(() => {
    checkToken(setStatus, setId);
    if (id) {
      handleId(id);
      navigateTo("/profile");
    } else {
      navigateTo("/login");
    }
  }, [id, glocalId]);
  return (
    <div>{status == responseStatus.PENDING ? <Loader /> : <Outlet />}</div>
  );
};

export default AuthLayout;
