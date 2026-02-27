import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/authentification/ProfilePage";
import Authlayout from "./layout/AuthLayout";
import ProtectedRoute from "./helper/ProtectedRoute";
import Login from "./pages/authentification/Login";
import Registration from "./pages/authentification/Registration";

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
