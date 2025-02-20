import React from "react";
import "../assets/css/about.css";

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-title">About Us</h1>
            <div className="about-content">
                <p className="about-text">
                    Welcome to Styloft! We are a passionate team of six developers dedicated to creating innovative marketing solutions. Our mission is to help businesses grow and succeed in the digital world.
                </p>
                <div className="team-section">
                    <h2 className="team-title">Meet Our Team</h2>
                    <div className="team-cards">
                        <div className="team-card">
                            <h3 className="team-member-name">Developer 1</h3>
                            <p className="team-member-role">Frontend Specialist</p>
                        </div>
                        <div className="team-card">
                            <h3 className="team-member-name">Developer 2</h3>
                            <p className="team-member-role">Backend Expert</p>
                        </div>
                        <div className="team-card">
                            <h3 className="team-member-name">Developer 3</h3>
                            <p className="team-member-role">Full Stack Developer</p>
                        </div>
                        <div className="team-card">
                            <h3 className="team-member-name">Developer 4</h3>
                            <p className="team-member-role">UI/UX Designer</p>
                        </div>
                        <div className="team-card">
                            <h3 className="team-member-name">Developer 5</h3>
                            <p className="team-member-role">DevOps Engineer</p>
                        </div>
                        <div className="team-card">
                            <h3 className="team-member-name">Developer 6</h3>
                            <p className="team-member-role">Project Manager</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}