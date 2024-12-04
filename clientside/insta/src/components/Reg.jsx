import React, { useEffect, useState } from "react";
import "./Reg.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Reg= () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: localStorage.getItem('email') || "",
    pwd: "",
    cpwd: "",
  })
  formData.email=localStorage.getItem('email')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData)
      const res=await axios.post("http://localhost:4000/api/adduser",formData)
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
          <input   type="text"   name="username"   value={formData.username}   onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="pwd" value={formData.pwd} onChange={handleChange}/>
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" name="cpwd" value={formData.cpwd} onChange={handleChange}/>
        </div>
        <button type="submit" className="btn-submit"><a href="/login">Register</a></button>
      </form>
    </div>
  );
};

export default Reg;





