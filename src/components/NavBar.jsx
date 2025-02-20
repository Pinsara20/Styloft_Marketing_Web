import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import logoLight from "../assets/images/styloft-white.png";
import "../assets/css/navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <NavLink to="/">
                    <img src={logoLight} alt="Logo" className="logo" />
                </NavLink>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/features">Features</NavLink></li>
                <li><NavLink to="/reviews">Reviews</NavLink></li>
                <li><NavLink to="/pricing">Pricing</NavLink></li>
            </ul>
        </nav>
    );
}