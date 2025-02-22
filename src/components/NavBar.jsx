import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logoLight from "../assets/images/styloft-white.png";
import "../assets/css/navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id) => {
        navigate("/"); // Ensure we're on the homepage
        setTimeout(() => {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }, 100);
        setIsOpen(false); // Close menu on mobile after clicking
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/" onClick={() => scrollToSection('home')}>
                    <img src={logoLight} alt="Logo" className="logo" />
                </a>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
                <li><button className="nav-link" onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button className="nav-link" onClick={() => scrollToSection('features')}>Features</button></li>
                <li><button className="nav-link" onClick={() => scrollToSection('pricing')}>Pricing</button></li>
                <li><button className="nav-link" onClick={() => scrollToSection('reviews')}>Reviews</button></li>
            </ul>
        </nav>
    );
}
