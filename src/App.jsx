import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home.jsx'
import Login from './pages/login/login.jsx'
import SignUp from './pages/signup/signUp.jsx'
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <div className='p-4 h-screen flex items-center justify-center '>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
