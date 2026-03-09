import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/authentification/ProfilePage";
import Authlayout from "./layout/AuthLayout";
import ProtectedRoute from "./helper/ProtectedRoute";
import Login from "./pages/authentification/Login";
import Registration from "./pages/authentification/Registration";
import ContextProvider from "./hooks/useContext";
import GroupList from "./pages/groups/GroupList";
import GroupRequestPage from "./pages/groups/GroupRequest";
import GroupDetailPage from "./pages/groups/GroupDetailPage";

function App() {
  return (
    <ContextProvider>
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
          <Route
            path="/group/list"
            element={
              <ProtectedRoute>
                <GroupList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/group/request"
            element={
              <ProtectedRoute>
                <GroupDetailPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
