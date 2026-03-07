import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router";
import { getUser } from "./lib/auth";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(getUser);

  const handleLogin = (user) => {
    setUser(user);
    navigate('/projects');
  }

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/projects" element={
          <PrivateRoute>
            <ProjectsPage user={user} />
          </PrivateRoute>} />
        <Route path="/login" element={<LoginPage onlogin={handleLogin} />} />
      </Routes>
    </>
  )
}

export default App
