import React, { useEffect, useState } from "react"
import "./Reg.css"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Reg = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: localStorage.getItem('email') || "",
    pwd: "",
    cpwd: "",
  })
  formData.email=localStorage.getItem('email')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(formData)
      const res=await axios.post("http://localhost:3000/api/adduser",formData)
      console.log(res)
      if(res.status==201){
        alert(res.data.msg)
        localStorage.removeItem('email')
        navigate('/login')
      }else{
        alert(res.data.msg)
      }
    } catch (error) {
      
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} method="post">
        <div className="form-group">
          <label>Username:</label>
          <input   type="text"   name="username" id="username"  value={formData.username} onChange={handleChange} placeholder="Full Name" required/>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Email" required/>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="pwd" id="pwd" value={formData.pwd} onChange={handleChange} placeholder="Password" required/>
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" name="cpwd" id="cpwd" value={formData.cpwd} onChange={handleChange} placeholder="Confirm Password" required/>
        </div>
        <button type="submit" className="btn-submit" >Register</button>
      </form>
    </div>
  );
};

export default Reg;





