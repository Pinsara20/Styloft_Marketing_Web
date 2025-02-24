import React, { useState, useEffect } from "react";
import "../assets/css/reviews.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import avatarImage from "../assets/images/avatar.jpg"; // Import the static image

export default function Reviews() {
  const [reviews, setReviews] = useState([
    {
      name: "Sarath Wijayanayake",
      review: "Absolutely love the service! Highly recommended for everyone.",
      avatar: avatarImage, // Use the static image
      rating: 4.5,
    },
    {
      name: "Ruvini Wickremasekara",
      review: "Very smooth experience and the customer support is amazing!",
      avatar: avatarImage,
      rating: 5,
    },
    {
      name: "Mihiran Perera",
      review: "Great platform! Helped me a lot in growing my business.",
      avatar: avatarImage,
      rating: 4,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    review: "",
    rating: 0,
  });

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isModalOpen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setNewReview({ name: "", review: "", rating: 0 });
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleStarClick = (index) => {
    const newRating = index + 1;
    setNewReview({ ...newReview, rating: newRating === newReview.rating ? newRating - 0.5 : newRating });
  };

  const handleSubmit = () => {
    if (newReview.name && newReview.review && newReview.rating > 0) {
      const newReviewData = {
        ...newReview,
        avatar: avatarImage, // Always use the static image
      };

      setReviews([newReviewData, ...reviews]);
      closeModal();
    }
  };

  return (
    <div className="reviews-section">
      <div className="reviews-header">
        <h1>What Our Clients Say</h1>
        <p>Real feedback from our great users around the country.</p>
      </div>

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.avatar} alt={review.name} className="review-avatar" />
            <h3 className="review-name">{review.name}</h3>
            <p className="review-text">"{review.review}"</p>
            <div className="review-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>
                  {i + 0.5 === review.rating ? <FaStarHalfAlt className="star active" /> : i < review.rating ? <FaStar className="star active" /> : <FaStar className="star" />}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="add-review-btn" onClick={openModal}>Add Review</button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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
            <div className="star-rating">
              {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>
                  {index + 0.5 === newReview.rating ? (
                    <FaStarHalfAlt className="star active" onClick={() => handleStarClick(index)} />
                  ) : index < newReview.rating ? (
                    <FaStar className="star active" onClick={() => handleStarClick(index)} />
                  ) : (
                    <FaStar className="star" onClick={() => handleStarClick(index)} />
                  )}
                </span>
              ))}
            </div>
            <button className="submit-review-btn" onClick={handleSubmit}>Submit Review</button>
          </div>
        </div>
      )}
    </div>
  );
}
