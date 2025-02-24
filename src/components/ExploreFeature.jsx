import React, { useEffect } from "react";
import "../assets/css/explorefeature.css"; // Import the updated CSS file for styling

const ExploreFeature = () => {
  // Scroll up automatically when the page is loaded
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the page to the top instantly
  }, []);

  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <h1 className="coming-soon-title">Coming Soon!</h1>
        <p className="coming-soon-description">
          We're working hard to bring this feature to you. Stay tuned for updates!
        </p>
        <div className="countdown-timer">
          <h3>Launching Soon</h3>
          <p>⏳ Stay tuned...</p>
        </div>
        <a href="/" className="back-home-button">Back to Home</a>
      </div>
    </div>
  );
};

export default ExploreFeature;
