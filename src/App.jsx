import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./authentification/login";
import ProfilePage from "./authentification/ProfilePage";
import Registration from "./authentification/registration";
import ContextProvider from "./hooks/useContext";
import AuthLayout from "./layout/AuthLayout";

function App() {
  useEffect(() => {
    axios.defaults.withCredentials = true;
  }, []);

  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout/>}>
            <Route element={<Login />} path="/login" />
            <Route element={<Registration />} path="/register" />
            <Route element={<ProfilePage />} path="/profile" />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
