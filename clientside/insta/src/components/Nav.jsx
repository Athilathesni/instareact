import React from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const value = event.target.value;
    if (value === "logout") {
      navigate("/Login");
    } else if (value === "profile") {
      navigate("/profile");
    }
  };

  return (
    <div className="navbar">
      <div className="rightside">   
        <h3>Username</h3>
      <div style={{height:"30px",width:"30px",backgroundColor:"white",borderRadius:"50%"}}></div>
        <select   name="userActions"   id="userActions"  onChange={handleSelectChange}   >
          <option value=""></option>
          <option value="logout">Logout</option>
          <option value="profile">Profile</option>
        </select>
      </div>
    </div>
  );
};

export default Nav;



















