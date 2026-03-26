import './App.css'
import { Routes, Route } from 'react-router'
import LoginPage from './pages/LoginPage'
import MainPage from './pages/MainPage'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<MainPage />} />
    </ Routes>
  )
}

export default App
