import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/features.css";
import Style_market from "../assets/images/Style_market.png";	
import Design_contest from "../assets/images/Design_contest.png";
import Style_studio from "../assets/images/style_studio.png";
import Style_Society from "../assets/images/Style-Society.png";

const ServicesSection = () => {
  return (
    <section className="services-container" id="services">
      {/* Service 1 */}
      <div className="service-block-1">
        <div className="service-content">
          <h2>STYLE STUDIO</h2>
          <p>
            The Style Studio is your creative space to design custom clothing and experiment with styles and fabrics. 
            Whether you're a beginner or a professional, showcase your designs,
            collaborate with others, and explore new trends. Unleash your creativity and redefine fashion!
          </p>
          <Link to="https://www.styloft.live" className="contact-button" target="_blank" rel="noopener noreferrer">EXPLORE</Link>
        </div>
        <div className="service-image">
          <img
            src={Style_studio}
            alt="Misty mountain landscape"
          />
        </div>
      </div>
      

      {/* Service 2 */}
      <div className="service-block-1">
        <div className="service-image">
          <img
            src={Style_market}
            alt="Snowy mountain landscape with moon"
          />
        </div>
        <div className="service-content">
          <h2>STYLE MARKET</h2>
          <p>
            The Style Market is your go-to marketplace for unique, custom-made fashion.
            Connect with designers, explore exclusive clothing collections, and shop one-of-a-kind pieces.
            Whether you're looking for personalized designs or the latest trends, the Style Market brings 
            creativity and style together in one place.
          </p>
          <Link to="https://www.styloft.live" className="contact-button" target="_blank" rel="noopener noreferrer">EXPLORE</Link>
        </div>
      </div>
    

      {/* Service 3 */}
      <div className="service-block-2">
         <div className="service-image">
          <img
            src={Design_contest}
            alt="Snowy mountain landscape with moon"
          />
        </div>
        <div className="service-content">
          <h2>DESIGN CONTEST</h2>
          <p>
            Showcase your creativity, compete with the best, and win exciting rewards in our design challenges!
          </p>
          <Link to="https://www.styloft.live" className="contact-button" target="_blank" rel="noopener noreferrer">EXPLORE</Link>
        </div>
      </div>

      {/* Service 4 */}
        <div className="service-block-1">
        <div className="service-image">
          <img
            src={Style_Society}
            alt="Snowy mountain landscape with moon"
          />
        </div>
        <div className="service-content">
          <h2>STYLE SOCIETY</h2>
          <p>
          The Style Society is a vibrant community for fashion enthusiasts, designers, and fashion students. Share ideas,
          collaborate on projects, participate in design challenges, and connect with like-minded creatives. Join us to 
          inspire and be inspired!
          </p>
          <Link to="https://www.styloft.live" className="contact-button" target="_blank" rel="noopener noreferrer">EXPLORE</Link>
        </div>
      </div>

    </section>
  );
};

export default ServicesSection;

