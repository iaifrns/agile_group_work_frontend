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
import RequestListPage from "./pages/groups/RequestListPage";
import TaskDetailPage from "./pages/tasks/DeatilsFeedbackPage";
import { io } from "socket.io-client";
import GroupTasksPage from "./pages/tasks/GroupTaskPage";
import MyTaskPage from "./pages/tasks/MyTaskPage";
import SchedulesPage from "./pages/schedule/schedulesPage";
import DashboardPage from "./pages/dashboard/DashboardPage";

export const socket = io("http://localhost:5001/", { withCredentials: true });

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
            path="/group/detail"
            element={
              <ProtectedRoute>
                <GroupDetailPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/group/request"
            element={
              <ProtectedRoute>
                <GroupRequestPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/group/request_list"
            element={
              <ProtectedRoute>
                <RequestListPage />
                {/* <TaskDetailPage /> */}
              </ProtectedRoute>
            }
          />
          <Route
            path="/task/detail/:taskId"
            element={
              <ProtectedRoute>
                <TaskDetailPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/task/list"
            element={
              <ProtectedRoute>
                <GroupTasksPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/task/my_task_list"
            element={
              <ProtectedRoute>
                <MyTaskPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/schedule"
            element={
              <ProtectedRoute>
                <SchedulesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
