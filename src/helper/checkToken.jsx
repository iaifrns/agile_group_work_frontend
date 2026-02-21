import axios from "axios";
import { checkTokenApi } from "../constants/endpoints";

export const checkToken = async (setId, navigateTo) => {
  try {
    const response = await axios.get(checkTokenApi);
    console.log(response.data);
    if (response.data.id.id) {
      setId(response.data.id.id);
      navigateTo('/profile')
    }else{
      navigateTo('/login')
    }
  } catch (e) {
    console.log(e);
    navigateTo('/login')
  }
};
