import React from "react";
import "../assets/css/about.css";
import Chamodya from "../assets/images/Propic.chamodya.png";	
import Pinsara from "../assets/images/Propic.pinsara.png";
import Thisaru from "../assets/images/Propic.thisaru.png";
import Shayka from "../assets/images/Propic.shakya.png";
import Hasindi from "../assets/images/Propic.hasindi.png";
import Piyusha from "../assets/images/Propic.piyusha.png";			

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
                            <img src={Chamodya} alt="Chamodya Ganegamage" className="team-member-image" />
                            <h3 className="team-member-name">Chamodya Ganegamage</h3>
                            <p className="team-member-role">Full Stack Developer</p>
                        </div>
                        <div className="team-card">
                            <img src={Pinsara} alt="Pinsara Pasandul" className="team-member-image" />
                            <h3 className="team-member-name">Pinsara Pasandul</h3>
                            <p className="team-member-role">Full Stack Developer</p>
                        </div>
                        <div className="team-card">
                            <img src={Thisaru} alt="Thisaru Shamal" className="team-member-image" />
                            <h3 className="team-member-name">Thisaru Shamal</h3>
                            <p className="team-member-role">Full Stack Developer</p>
                        </div>
                        <div className="team-card">
                            <img src={Shayka} alt="Shakya Rajapaksha" className="team-member-image" />
                            <h3 className="team-member-name">Shakya Rajapaksha</h3>
                            <p className="team-member-role">Full Stack Developer</p>
                        </div>
                        <div className="team-card">
                            <img src={Hasindi} alt="Hasindi Enasha" className="team-member-image" />
                            <h3 className="team-member-name">Hasindi Enasha</h3>
                            <p className="team-member-role">Full Stack Developer</p>
                        </div>
                        <div className="team-card">
                            <img src={Piyusha} alt="Piyusha Senodi" className="team-member-image" />
                            <h3 className="team-member-name">Piyusha Senodi</h3>
                            <p className="team-member-role">Full Stack Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}