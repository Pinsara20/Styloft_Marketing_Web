import React from "react";
import "../assets/css/footer.css";

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#333", color: "#fff", padding: "20px", textAlign: "center" }}>
            <div>
                <h2>Stay Connected</h2>
                <p>Follow us on social media for the latest updates.</p>
                
                <div className="contacts-icons">
                    <a href="https://www.facebook.com/share/15rfSTq2Ka/" target="_blank" rel="noopener noreferrer" className="contacts-link">
                        <img src="src\assets\images\icons8-facebook-48.png" alt="Facebook" className="contacts-icon" />
                    </a>
                    <a href="https://www.instagram.com/styloft._?igsh=MXhmaHcyOWttdTNlbA==" target="_blank" rel="noopener noreferrer" className="contacts-link">
                        <img src="src/assets/images/Instagram-logo.png" alt="Instagram" className="contacts-icon" />
                    </a>
                </div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <p>&copy; 2023 Styloft. All rights reserved.</p>
            </div>
        </footer>
    );
}