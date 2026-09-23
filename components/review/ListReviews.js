import React from "react";

const ListReviews = ({ reviews }) => {
  return (
    <div className="reviews mb-5" style={{ maxWidth: 720 }}>
      <h3>Reviews</h3>
      <hr />

      {reviews &&
        reviews.map((review) => (
          <div key={review._id} className="review-card my-3">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(review.rating / 5) * 100}%` }}
              ></div>
            </div>
            <p className="review_user mb-1 mt-2">by {review.name}</p>
            <p className="review_comment">{review.comment}</p>

            <hr />
          </div>
        ))}
    </div>
  );
};

export default ListReviews;
