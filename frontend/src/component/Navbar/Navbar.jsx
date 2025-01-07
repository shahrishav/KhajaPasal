import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check login status from local storage or API
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.name) {
      setIsLoggedIn(true);
      setUserName(user.name);
    }
  }, []);

  const handleLoginClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate("/profile");
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Khaja Pasal Logo" />
        <span>Khaja Pasal</span>
      </div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/location">Location</Link>
        <Link to="/offers">Offers</Link>
        <button className="navbar-login" onClick={handleLoginClick}>
          {isLoggedIn ? userName : "Login / Register"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;