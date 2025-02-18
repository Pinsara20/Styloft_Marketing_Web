import React from "react";
import { ReactTyped } from "react-typed";


export default function Home() {
    return (
        <div className="hero-section" id="hero-section">
            <div className="hero-image"></div>
            <div className="intro">
                <h1>Styloft</h1>
                <ReactTyped
                    className="typed-text"
                    strings={["Design Your Style", "Create Your Fashion", "Inspire the World"]}
                    typeSpeed={60}
                    backSpeed={80}
                    loop
                />
            </div>

        </div>
    );
}