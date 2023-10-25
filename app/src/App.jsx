import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Home></Home>}/>
        </Routes>
      </div>
    </>
  )
}

export default App

