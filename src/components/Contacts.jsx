import React from "react";
import "../assets/css/contests.css";

export default function Contacts() {
    return (
        <div className="contacts-container" id="contacts">
            <h1 className="contacts-title">Join Our Community</h1>

            <div className="contacts-form">
                <h2 className="contacts-form-title">Sign Up for Our Newsletter</h2>
                <form action="" className="contacts-form-content">
                    <input type="text" placeholder="Enter your email" className="contacts-input" />
                    <button type="submit" className="contacts-button">Sign Up</button>
                </form>
            </div>

        </div>
    );
}