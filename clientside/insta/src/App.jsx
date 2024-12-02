import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Index from './components/Index'
import Login from './components/Login'
import Nav from './components/Nav'
import Reg from './components/Reg'
function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/Index" element={<Index/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Reg" element={<Reg/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App