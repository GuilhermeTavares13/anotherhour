import './App.css'
import { Routes, Route } from 'react-router'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/' element={<MainPage />} />
      </Route>
    </ Routes>
  )
}

export default App
