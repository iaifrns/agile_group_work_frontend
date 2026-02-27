import axios from "axios";
import { responseStatus } from "../../assets/enum/responseStatus";
import { loginApiUrl } from "../../constants/endpoints";

const loginUser = async (data, setErrMess, setStatus, handleId, navigate) => {
  try {
    setStatus(responseStatus.PENDING);
    const response = await axios.post(loginApiUrl, data);
    if(response.data.data){
        handleId(response.data.data.id)
        navigate('/profile')
    }else{
        setErrMess(response.data.error)
    }
    setStatus(responseStatus.SUCCESS);
  } catch (e) {
    setStatus(responseStatus.ERROR);
    setErrMess("A problem occured please try again");
    console.log(e);
  }
};

export { loginUser };

