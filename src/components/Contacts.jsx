import React from "react";
import "../assets/css/contests.css";

export default function Contacts() {
    return (
        <div className="contacts-container">
            <h1 className="contacts-title">Join Our Community</h1>

            <div className="contacts-form">
                <h2 className="contacts-form-title">Sign Up for Our Newsletter</h2>
                <form action="" className="contacts-form-content">
                    <input type="text" placeholder="Enter your email" className="contacts-input" />
                    <button type="submit" className="contacts-button">Sign Up</button>
                </form>
            </div>

            <div className="contacts-follow">
                <h2 className="contacts-follow-title">Follow Us</h2>
                <div className="contacts-icons">
                    <a href="https://www.facebook.com/share/15rfSTq2Ka/" target="_blank" rel="noopener noreferrer" className="contacts-link">
                        <img src="src/assets/images/Facebook-logo.png" alt="Facebook" className="contacts-icon" />
                    </a>
                    <a href="https://www.instagram.com/styloft._?igsh=MXhmaHcyOWttdTNlbA==" target="_blank" rel="noopener noreferrer" className="contacts-link">
                        <img src="src/assets/images/Instagram-logo.png" alt="Instagram" className="contacts-icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}