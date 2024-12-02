import React, { useState } from "react";
import "./Email.css";
import { Navigate, useNavigate } from "react-router-dom";
const Email = () => {
  const [email, setEmail] = useState("");
const navigate=useNavigate()
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Email submitted for verification:", email);
  navigate("/Reg")
  };

  return (
    <div className="email">
      <h2 className="h2">Email Verification</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input className="infor" type="email"  name="email"  value={email}  onChange={handleChange}  required  placeholder="Enter your email" />
        </div>
        <button type="submit" className="btnv">  Verify </button>
      </form>
    </div>
  );
};

export default Email;


