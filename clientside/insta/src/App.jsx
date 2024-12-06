import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import './App.css'
import Nav from './components/Nav'
import Index from './components/Index'
import Login from './components/Login'
import Reg from './components/Reg'
import Email from './components/Email'
import Profile from './components/Profile'
import { useState } from 'react'
import Edit from './components/Edit'
import Add from './components/Add'
function App() {
const [user,setUser]=useState("")
// console.log("app"+user);

  return (
    <BrowserRouter>
    {user&& <Nav username={user}/>}
      <Routes>
        <Route path="/" element={<Index setUser={setUser}/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/reg" element={<Reg/>}></Route>
        <Route path='/email' element={<Email/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path="/edit" element={<Edit/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App