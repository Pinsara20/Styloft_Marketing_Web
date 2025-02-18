import React, { useState } from "react";
import "../assets/css/reviews.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

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

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    review: "",
    rating: 5,
  });

  // Open & Close Modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle Input Change
  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  // Submit Review
  const handleSubmit = () => {
    if (newReview.name && newReview.review) {
      const newReviewData = {
        ...newReview,
        avatar: `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "men" : "women"}/${Math.floor(Math.random() * 80)}.jpg`,
        rating: parseFloat(newReview.rating),
      };

      setReviews([newReviewData, ...reviews]); // Add new review to the top
      setNewReview({ name: "", review: "", rating: 5 }); // Reset form
      closeModal();
    }
  };

  return (
    <div className="reviews-section">
      {/* Header */}
      <div className="reviews-header">
        <h3>Customer Reviews</h3>
        <h1>What Our Clients Say</h1>
        <p>Real feedback from our happy customers around the world.</p>
      </div>

      {/* Review Cards */}
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.avatar} alt={review.name} className="review-avatar" />
            <h3 className="review-name">{review.name}</h3>
            <p className="review-text">"{review.review}"</p>

            {/* Star Rating */}
            <div className="review-stars">
              {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                <FaStar key={i} />
              ))}
              {review.rating % 1 !== 0 && <FaStarHalfAlt />}
            </div>
          </div>
        ))}
      </div>

      {/* Add Review Button */}
      <button className="add-review-btn" onClick={openModal}>
        Add Review
      </button>

      {/* Review Form Modal */}
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
            <select name="rating" value={newReview.rating} onChange={handleChange}>
              <option value="5">⭐⭐⭐⭐⭐ (5)</option>
              <option value="4.5">⭐⭐⭐⭐✨ (4.5)</option>
              <option value="4">⭐⭐⭐⭐ (4)</option>
              <option value="3.5">⭐⭐⭐✨ (3.5)</option>
              <option value="3">⭐⭐⭐ (3)</option>
            </select>

            <button className="submit-review-btn" onClick={handleSubmit}>
              Submit Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
