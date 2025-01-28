import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/logo.png"; 

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format.";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone number must be 10 digits.";

    if (!formData.password.trim()) newErrors.password = "Password is required.";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters long.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:5500/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Signup successful! Please log in.");
        console.log("Signup successful! Please log in.");
        navigate("/login");
      } else {
        toast.error(data.message || "Signup failed.");
      }
    } catch (error) {
      toast.error("Server error. Please try again later.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage: "url('/src/assets/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Logo */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>

      {/* Signup Form */}
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "20px",
          }}
        >
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label style={{ fontSize: "1rem", color: "#555" }}>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p style={{ color: "red", fontSize: "0.9rem", marginTop: "5px" }}>
                {errors.firstName}
              </p>
            )}
          </div>

          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label style={{ fontSize: "1rem", color: "#555" }}>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p style={{ color: "red", fontSize: "0.9rem", marginTop: "5px" }}>
                {errors.lastName}
              </p>
            )}
          </div>

          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label style={{ fontSize: "1rem", color: "#555" }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p style={{ color: "red", fontSize: "0.9rem", marginTop: "5px" }}>
                {errors.email}
              </p>
            )}
          </div>

          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label style={{ fontSize: "1rem", color: "#555" }}>
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <p style={{ color: "red", fontSize: "0.9rem", marginTop: "5px" }}>
                {errors.phone}
              </p>
            )}
          </div>

          <div style={{ marginBottom: "15px", textAlign: "left" }}>
            <label style={{ fontSize: "1rem", color: "#555" }}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "1rem",
              }}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p style={{ color: "red", fontSize: "0.9rem", marginTop: "5px" }}>
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#ff7f50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          >
            Sign Up
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#555",
            marginTop: "15px",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{
              color: "#ff7f50",
              textDecoration: "none",
            }}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
