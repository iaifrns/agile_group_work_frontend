import axios from "axios";
import { checkTokenApi } from "../constants/endpoints";
  {/* This file contains the checkToken function, which is used to check the token when the user access the authentication page, it will send a request to the backend to check the token, if the token is valid, it will set the student id in the context and navigate to the profile page, if the token is invalid, it will navigate to the login page */}
export const checkToken = async (setId, navigateTo) => {
  try {
    const response = await axios.get(checkTokenApi, { withCredentials: true });
    console.log(response.data.id);
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
