import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { toast } from "react-toastify";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

import { useDispatch, useSelector } from "react-redux";
import {
  newReview,
  checkReviewAvailability,
  clearErrors,
} from "../../redux/actions/roomActions";
import { NEW_REVIEW_RESET } from "../../redux/constants/roomConstants";

const NewReview = () => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const { error, success, loading } = useSelector((state) => state.newReview);
  const { reviewAvailable } = useSelector((state) => state.checkReview);

  const { id } = router.query;

  useEffect(() => {
    if (id !== undefined) {
      dispatch(checkReviewAvailability(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Your review has been posted.");
      dispatch({ type: NEW_REVIEW_RESET });
      setOpen(false);
      setRating(0);
      setComment("");
      router.push(`/room/${id}`);
    }
  }, [dispatch, success, error, id, router]);

  const submitHandler = () => {
    if (!rating) {
      toast.error("Please select a star rating.");
      return;
    }

    dispatch(newReview({ rating, comment, roomId: id }));
  };

  if (!reviewAvailable) return null;

  return (
    <>
      <button
        id="review_btn"
        type="button"
        className="btn btn-primary mt-4 mb-5"
        onClick={() => setOpen(true)}
      >
        Submit your review
      </button>

      <Modal open={open} onClose={() => setOpen(false)} center>
        <div style={{ minWidth: 320, maxWidth: 420, padding: "0.5rem" }}>
          <h4 style={{ fontFamily: "var(--font-display)" }}>Submit review</h4>

          <ul className="stars" style={{ padding: 0, listStyle: "none", display: "flex" }}>
            {[1, 2, 3, 4, 5].map((value) => (
              <li
                key={value}
                className={`star ${
                  value <= (hoverRating || rating) ? "red" : ""
                }`}
                onClick={() => setRating(value)}
                onMouseEnter={() => setHoverRating(value)}
                onMouseLeave={() => setHoverRating(0)}
                role="button"
                aria-label={`${value} star${value > 1 ? "s" : ""}`}
              >
                <i className="fa fa-star"></i>
              </li>
            ))}
          </ul>

          <textarea
            name="review"
            id="review"
            rows={4}
            className="form-control mt-3"
            placeholder="Tell other guests about your stay..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

          <button
            className="btn my-3 float-right review-btn px-4 text-white"
            onClick={submitHandler}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Modal>
    </>
  );
};

export default NewReview;
