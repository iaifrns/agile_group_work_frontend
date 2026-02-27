import axios from "axios";
import { useContext } from "react";
import { responseStatus } from "../../assets/enum/responseStatus";
import { registerApiUrl } from "../../constants/endpoints";
import { Context } from "../../hooks/useContext";

const registerUser = async (data, setErrMess, setStatus, navigateTo) => {
  const { handleId } = useContext(Context);

  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.post(registerApiUrl, data);
    if (response.data.error) {
      setErrMess(response.data.error);
    } else {
      handleId(response.data.data.id);
      navigateTo("/profile");
    }
    setStatus(responseStatus.SUCCESS);
  } catch (e) {
    setStatus(responseStatus.ERROR);
    setErrMess("A problem occured please try again");
    console.log(e);
  }
};

export { registerUser };
