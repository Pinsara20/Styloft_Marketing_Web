import React from "react";
import "../assets/css/contests.css";

export default function Contacts() {
    return (
        <div className="contacts-container">
            <h1 className="contacts-title">Join Our Community</h1>
            
            <div className="contacts-follow">
                <h2 className="contacts-follow-title">Follow Us</h2>
                <a href="https://www.facebook.com/share/15rfSTq2Ka/" target="_blank" rel="noopener noreferrer" className="contacts-link">
                    <img src="src/assets/images/Facebook-logo.png" alt="Facebook" className="contacts-icon" />
                </a>
                <a href="https://www.instagram.com/YourPage" target="_blank" rel="noopener noreferrer" className="contacts-link">
                    <img src="src/assets/images/Instagram-logo.png" alt="Instagram" className="contacts-icon" />
                </a>
            </div>
        </div>
    );
}