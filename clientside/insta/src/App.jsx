import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Index from './components/Index'
import Login from './components/Login'
import Reg from './components/Reg'
import Email from './components/Email'
function App() {

  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Reg" element={<Reg/>}/>
        <Route path='/Email' element={<Email/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App