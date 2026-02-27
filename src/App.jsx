import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/authentification/login";
import ProfilePage from "./pages/authentification/ProfilePage";
import Registration from "./pages/authentification/registration";
import Authlayout from "./layout/AuthLayout";
import ProtectedRoute from "./helper/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Authlayout />} path="/">
          <Route element={<Login />} path="/login" />
          <Route element={<Registration />} path="/register" />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
          path="/profile"
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
