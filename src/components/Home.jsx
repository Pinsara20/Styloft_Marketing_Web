import React from "react";
import "../assets/css/home.css";
import 'animate.css';
import { useEffect, useState } from "react";


export default function StyloftHero() {
  const [typedText, setTypedText] = useState("")
  const fullText =
    "The ultimate digital hub for fashion creativity, connecting designers, students, and industry professionals to collaborate, innovate, and thrive."
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, textIndex + 1))
        setTextIndex(textIndex + 1)
      }, 50)

      return () => clearTimeout(timeout)
    }
  }, [textIndex, fullText])

return (
    <div className="hero-section">
        <div className="hero-overlay"></div>
        <img src="src/assets/images/info-img.png" alt="Fashion Design" className="hero-image" />

        <div className="hero-content">
            <div className="intro">
                <h1 className="animate-bounce">Styloft</h1>
                <p className="typed-text">
                    {typedText}
                    <span className="cursor-blink">|</span>
                </p>
            </div>

            <div className="home-buttons">
                <div className="sign-in-button">
                    <a href="https://www.styloft.live/register" target="_blank" className="modern-button" rel="noopener noreferrer">Sign In</a>
                </div>
                <div className="community">
                    <a href="https://www.styloft.live" target="_blank" className="modern-button" rel="noopener noreferrer">Try Styloft</a>
                </div>
            </div>
        </div>
    </div>
)
}

