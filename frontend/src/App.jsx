import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router";
import { getUser, handleUserLogout } from "./lib/auth";
import LoginPage from "./pages/LoginPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ProjectPage } from "./pages/ProjectPage";
import PrivateRoute from "./components/PrivateRoute";
import Nav from "./components/Nav";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(getUser);

  const handleLogin = (user) => {
    setUser(user);
    navigate('/projects');
  }

  const handleLogout = () => {
    setUser(handleUserLogout);
    navigate('/');
  }

  return (
    <>
      {user.id && <Nav user={user} onLogout={handleLogout} />} 
      <main className="section">
        <Routes>
          {/* <Route index element={<HomePage />} /> */}
          <Route path="/projects" element={
            <PrivateRoute user={user}>
              <ProjectsPage user={user} />
            </PrivateRoute>} />
          <Route path="/projects/:id" element={
            <PrivateRoute user={user}>
              <ProjectPage user={user}/>
            </PrivateRoute>} />
          <Route index path="/" element={<LoginPage onLogin={handleLogin} user={user} />} />
        </Routes>
      </main>
    </>
  )
}

export default App
