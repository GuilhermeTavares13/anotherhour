import Home from "./components/Home"
import { Routes, Route } from "react-router"
import Login from "./components/login"

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
