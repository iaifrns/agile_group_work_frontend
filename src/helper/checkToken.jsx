import axios from "axios";
import { checkTokenApi } from "../constants/endpoints";

export const checkToken = async (setId, navigateTo) => {
  try {
    const response = await axios.get(checkTokenApi, { withCredentials: true });
    console.log(response.data.id.id);
    if (response.data.id.id) {
      setId(response.data.id.id);
    } else {
      navigateTo("/login");
    }
    navigateTo("/profile");
  } catch (e) {
    console.log(e);
    navigateTo("/login");
  }
};
