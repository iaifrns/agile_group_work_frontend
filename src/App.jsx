import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./authentification/login";
import Registration from "./authentification/registration";
import CheckAuthentification from "./helper/checkAuthentification";
import ProfilePage from "./authentification/ProfilePage";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios.defaults.withCredentials = true;
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CheckAuthentification />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Registration />} path="/register" />
        <Route element={<ProfilePage />} path="/profile" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
