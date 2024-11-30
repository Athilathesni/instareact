import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Login.css'
const Login = () => {
  const navigate=useNavigate()
  const [val, setVal] = useState({
    email:"",
    pass:""
  })
  const handleClick = async (e) => {
    e.preventDefault()
    console.log(val)
  
    try {
      const res = await fetch('http://localhost:3000/api/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(val)
      });
      
      const data = await res.json()
  
      if (res.status === 201) {
        alert(data.msg)
        navigate("/")
      } else {
        alert(data.error)
      }
    } catch (error) {
      console.error("An error occurred:", error)
      alert("Something went wrong. Please try again later.")
    }
  }
  return (
    <div className="main">
        <div className='form'>
            <h2>Login Form</h2>
      <form >
        <div className='form1'>
        <input 
          type="text" name='email'
          placeholder="email"  
        />
        <input 
          type="text" name='pass'
          placeholder="password" 
        /></div><br/>
    <div className="pass">Forgot password?</div>
        <button onClick={handleClick} type="submit">Login</button>
        <div className="signup">Create New Account <Link to={'/Reg'}>Signup</Link></div>
      </form>
      </div>
    </div>
  )
}

export default Login