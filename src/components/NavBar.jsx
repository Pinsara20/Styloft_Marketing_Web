import React from "react";
import { NavLink } from 'react-router-dom';
import logoLight from "../assets/images/styloft-logo.png";
import "../assets/css/navbar.css";

export default function NavBar() {
    return (
        <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/home">
          <img src={logoLight} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <ul className="navbar-links">
        <li><a href="home">Home</a></li>
        <li><a href="features">Features</a></li>
        <li><a href="reviews">Reviews</a></li>
        <li><a href="pricing">Pricing</a></li>
      </ul>
    </nav>
    );
}