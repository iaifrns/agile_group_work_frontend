import axios from "axios";
import { useContext } from "react";
import { checkTokenApi } from "../constants/endpoints";
import { Context } from "../hooks/useContext";

export const checkToken = async () => {
  const { handleId: setId } = useContext(Context);
  try {
    const response = await axios.get(checkTokenApi);
    console.log(response.data);
    if (response.data.id.id) {
      setId(response.data.id.id);
    }
  } catch (e) {
    console.log(e);
  }
};
