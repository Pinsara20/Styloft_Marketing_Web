import React, { useState } from "react";
import "../assets/css/reviews.css";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  const [reviews, setReviews] = useState([
    {
      name: "John Doe",
      review: "Absolutely love the service! Highly recommended for everyone.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4.5,
    },
    {
      name: "Sarah Lee",
      review: "Very smooth experience and the customer support is amazing!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      name: "Michael Brown",
      review: "Great platform! Helped me a lot in growing my business.",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
      rating: 4,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    review: "",
    rating: 0, // Default to 0 stars
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setNewReview({ name: "", review: "", rating: 0 }); // Reset form including stars
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  // Handle Star Click for Rating Selection
  const handleStarClick = (index) => {
    setNewReview({ ...newReview, rating: index + 1 });
  };

  const handleSubmit = () => {
    if (newReview.name && newReview.review && newReview.rating > 0) {
      const newReviewData = {
        ...newReview,
        avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "men" : "women"}/${Math.floor(Math.random() * 80)}.jpg`,
      };

      setReviews([newReviewData, ...reviews]);

      // Reset form after submission, including clearing selected stars
      setNewReview({ name: "", review: "", rating: 0 });
      closeModal();
    }
  };

  return (
    <div className="reviews-section">
      <div className="reviews-header">
        <h1>What Our Clients Say</h1>
        <p>Real feedback from our greate users around the Country.</p>
      </div>

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.avatar} alt={review.name} className="review-avatar" />
            <h3 className="review-name">{review.name}</h3>
            <p className="review-text">"{review.review}"</p>

            <div className="review-stars">
              {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="add-review-btn" onClick={openModal}>
        Add Review
      </button>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>✖</button>
            <h2>Add Your Review</h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={newReview.name}
              onChange={handleChange}
              required
            />

            <textarea
              name="review"
              placeholder="Write your review..."
              value={newReview.review}
              onChange={handleChange}
              required
            />

            {/* Clickable Star Rating */}
            <div className="star-rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  className={`star ${index < newReview.rating ? "active" : ""}`}
                  onClick={() => handleStarClick(index)}
                />
              ))}
            </div>

            <button className="submit-review-btn" onClick={handleSubmit}>
              Submit Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
