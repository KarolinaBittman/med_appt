import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ doctorName }) => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !review || !rating) {
      alert('Please fill in all fields');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="review-form-container">
      {submitted ? (
        <div className="review-submitted">
          <h3>Thank you for your feedback!</h3>
          <p>Your review has been submitted successfully.</p>
        </div>
      ) : (
        <>
          <h3>Give Review {doctorName ? `for ${doctorName}` : ''}</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Patient Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Review</label>
              <textarea
                className="form-control"
                placeholder="Write your review here"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                rows="4"
                required
              />
            </div>
            <div className="form-group">
              <label>Rating</label>
              <select
                className="form-control"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              >
                <option value="">Select rating</option>
                <option value="1">⭐ 1</option>
                <option value="2">⭐⭐ 2</option>
                <option value="3">⭐⭐⭐ 3</option>
                <option value="4">⭐⭐⭐⭐ 4</option>
                <option value="5">⭐⭐⭐⭐⭐ 5</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Review
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ReviewForm;