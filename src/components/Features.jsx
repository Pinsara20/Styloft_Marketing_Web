import React from "react";
import "../assets/css/features.css";

const ServicesSection = () => {
  return (
    <section className="services-container">
      {/* Service 1 */}
      <div className="service-block-1">
        <div className="service-content">
          <h2>STYLE STUDIO</h2>
          <p>
            The Style Studio is your creative space to design custom clothing and experiment with styles and fabrics. 
            Whether you're a beginner or a professional, showcase your designs,
            collaborate with others, and explore new trends. Unleash your creativity and redefine fashion!
          </p>
          <a href="#" className="contact-button">
            EXPLORE
          </a>
        </div>
        <div className="service-image">
          <img
            src="src\assets\images\style_studio.jpg"
            alt="Misty mountain landscape"
          />
        </div>
      </div>
      

      {/* Service 2 */}
      <div className="service-block-1">
        <div className="service-image">
          <img
            src="src\assets\images\Style_market.png"
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
          <a href="#" className="contact-button">
            EXPLORE
          </a>
        </div>
      </div>
    

      {/* Service 3 */}
      <div className="service-block-2">
         <div className="service-image">
          <img
            src="src\assets\images\Design_contest.png"
            alt="Snowy mountain landscape with moon"
          />
        </div>
        <div className="service-content">
          <h2>DESIGN CONTEST</h2>
          <p>
            Showcase your creativity, compete with the best, and win exciting rewards in our design challenges!
          </p>
          <a href="#" className="contact-button">
            EXPLORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

