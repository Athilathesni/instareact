import React, { useState } from 'react';
import "./Reg.css";
import { Link } from "react-router-dom";
const Reg= () => {
  // State to store form data and validation messages
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [errors, setErrors] = useState({});
  
  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Basic validation function
  const validateForm = () => {
    const validationErrors = {};
    if (!formData.fullName) validationErrors.fullName = 'Full Name is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = 'Email is invalid';
    if (!formData.password) validationErrors.password = 'Password is required';
    else if (formData.password.length < 6) validationErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';
    return validationErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!');
      // Submit form data to the server here (e.g., using fetch or axios)
    } else {
      setErrors(validationErrors);  // Show validation errors if any
    }
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        {/* Full Name */}
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="form-input"
          />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-input"
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-input"
          />
          {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button type="submit" className="submit-btn"><Link to={'/Login'}>Register</Link></button>
        </div>
      </form>
    </div>
  );
};

export default Reg;
