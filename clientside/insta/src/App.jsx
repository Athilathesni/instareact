import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import './App.css'
import Nav from './components/Nav'
import Index from './components/Index'
import Login from './components/Login'
import Reg from './components/Reg'
import Email from './components/Email'
import { useState } from 'react'
function App() {
const [user,setUser]=useState("")
console.log("app"+user);

  return (
    <>
    <BrowserRouter>
    {user&& <Nav user={user}/>}
      <Routes>
        <Route path="/" element={<Index setUser={setUser}/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/reg" element={<Reg/>}></Route>
        <Route path='/email' element={<Email/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App