import React from "react";
import { FaRocket, FaCoffee, FaBullseye } from "react-icons/fa";
import "../assets/css/pricing.css"; // Import CSS file

const plans = [
  {
    title: "REGULAR USERS",
    price: "FREE",
    description: "Suggested for Regular Users and Students.",
    icon: <FaRocket className="icon" />,
    features: [
      "Can explore designs.",
      "Social media access.",
      "User account creation.",
      "Limited access to some features.",
      "Maintain your future career.",
    ],
  },
  {
    title: "PRO USERS",
    price: "$3",
    duration: "/ month",
    description: "Suggested for Professionals and students.",
    icon: <FaCoffee className="icon" />,
    features: [
      "Many advanced features.",
      "Compete with other athletes.",
      "Exclusive content access.",
      "Personalized design suggestions.",
      "Advanced analytics dashboard.",
    ],
    highlight: true, // Special style for the middle card
  },
  {
    title: "COMMERCIAL",
    price: "$20",
    duration: "/ month",
    description: "Collaborate Professionally.",
    icon: <FaBullseye className="icon" />,
    features: [
      "Create your own contests.",
      "Collaborate with professionals.",
      "Exclusive branding tools.",
      "Enhanced marketing options.",
      "Advanced analytics dashboard.",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="pricing-section">
      {/* Header */}
      <div className="pricing-header">
        <h3>Our Pricing</h3>
        <p>Choose a plan that fits your needs and start enhanment of you career today!</p>
      </div>

      {/* Pricing Cards */}
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.highlight ? "highlight" : ""}`}>
            <div>{plan.icon}</div>

            {/* Plan Title */}
            <h3>{plan.title}</h3>

            {/* Price */}
            <h2 className="price">
              {plan.price} <span className="duration">{plan.duration}</span>
            </h2>

            {/* Description */}
            <p className="description">{plan.description}</p>

            {/* Features List */}
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <i className="bi bi-check-all feature-icon"></i> {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button>Get Started →</button>
          </div>
        ))}
      </div>
    </div>
  );
}
