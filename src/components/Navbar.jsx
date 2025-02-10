import React from "react";
import '../styles/navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/Population">Population</Link>
      </div>
      <div className="nav-right">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;