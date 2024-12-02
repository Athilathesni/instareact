import React, { useState } from 'react';
import './Index.css'; // Import the custom CSS for the navbar
function ProfileDropdown() {
  // Manage dropdown open/close state using React's useState hook
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-dropdown">
      {/* Profile Name */}
      <div className="nav-dropdown" id="uname">name</div>
      
      {/* Profile Image */}
      <div id="profilep" className="profilep">
        <img src='' alt='Profile' id='' className="profile-pic" width="40" height="40"/>
      </div>

      {/* Dropdown Button */}
      <button onClick={toggleDropdown} className="dropbtn">▼</button>
      
      {/* Dropdown Content - Visible only when isOpen is true */}
      {isOpen && (
        <div id="myDropdown" className="dropdown-content">
          <a href="#profile">Profile</a>
          <a href="#logout">Logout</a>
        </div>
      )}
    </div>
  );
}

function Index() {
  return (
    <nav className="navbar">
      {/* Profile Dropdown Component */}
      <ProfileDropdown />
    </nav>
  );
}

export default Index;