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
    <nav className="navbar">
      <div className="right">
        <span className="username">Username</span>
        <div style={{height:"30px",width:"30px",backgroundColor:"white",borderRadius:"50%"}}></div>
        <div className="dropdown">
          <button onClick={toggleDropdown} className="dropbtn1">▼</button>
          <button className="login">
          <a href="/login">
            Login
          </a>
        </button>
       
          {isDropdownVisible && (
            <div className="dropcontent">
              <a href="/profile">Profile</a><br/>
              <a onClick={handleLogout} style={{ cursor: "pointer" }}>
                Logout
              </a>
            </div>
          )}
        </div>
      </div> 
      </nav>
    
  )
}
//     <div className="navbar">
//       <div className="rightside">   
//         <h3>Username</h3>
//       <div style={{height:"30px",width:"30px",backgroundColor:"white",borderRadius:"50%"}}></div>
//       <button>login</button>
//         <select   name="userActions"   id="userActions"  onChange={handleLogout}   >
//           <option value=""></option>
//           <option value="logout">Logout</option>
//           <option value="profile">Profile</option>
//         </select>
//       </div>
//     </div>
//   );
// };

export default Nav;



















