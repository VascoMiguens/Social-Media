import { NavLink } from "react-router-dom";
import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        Vasco Miguéns
      </NavLink>
      <ul>
        <CustomNavLink to="/">Squad</CustomNavLink>
        <CustomNavLink to="/league">League</CustomNavLink>
        <CustomNavLink to="/news">News</CustomNavLink>
        <CustomNavLink to="/world-news">World news</CustomNavLink>
        <CustomNavLink to="/profile/:username">Profile</CustomNavLink>
      </ul>
    </nav>
  );
}

// A custom NavLink component that highlights the active link in the navbar based on the current route
function CustomNavLink({ to, children, ...props }) {
  return (
    <li>
      <NavLink to={to} activeclassname="active" {...props}>
        {children}
      </NavLink>
    </li>
  );
}
