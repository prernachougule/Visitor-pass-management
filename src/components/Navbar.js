import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Visitor Pass System</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">Admin-pannel</Link></li>
        <li><Link to="/visitor-registration">Visitor Registration</Link></li>
        <li><Link to="/security-dashboard">Dashboard</Link></li>
        <li><Link to="/gate-pass">Gate Pass</Link></li>
        <li><Link to="/verify-identity">Verify Identity</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
