// import React from "react";
// import "./Nav.css";
// import { useNavigate } from "react-router-dom";
// const Nav = () => {
//   const navigate = useNavigate();

//   const handleSelectChange = (event) => {
//     const value = event.target.value;
//     if (value === "logout") {
//       navigate("/Login");
//     } else if (value === "profile") {
//       navigate("/profile");
//     }
//   };

import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Nav.css"

const Nav = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false)
  const navigate = useNavigate()

  const toggleDropdown = (event) => {
    event.stopPropagation()
    setIsDropdownVisible((prevState) => !prevState)
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsDropdownVisible(false)
      }
    }

    window.addEventListener("click", handleOutsideClick)
    return () => {
      window.removeEventListener("click", handleOutsideClick)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token")
    alert("Logout Successfully")
    navigate("/login")
  }

  return (
    <div className="navbar">
      <div className="rightside">   
        <h3>Username</h3>
      <div style={{height:"30px",width:"30px",backgroundColor:"white",borderRadius:"50%"}}></div>
        <select   name="userActions"   id="userActions"  onChange={handleLogout}   >
          <option value=""></option>
          <option value="logout">Logout</option>
          <option value="profile">Profile</option>
        </select>
      </div>
    </div>
  );
};

export default Nav;



















