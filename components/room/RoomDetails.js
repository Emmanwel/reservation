import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";

import RoomFeatures from "./RoomFeatures";
import NewReview from "../review/NewReview";
import ListReviews from "../review/ListReviews";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Carousel } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors } from "../../redux/actions/roomActions";

import {
  checkBooking,
  getBookedDates,
} from "../../redux/actions/bookingActions";
import { CHECK_BOOKING_RESET } from "../../redux/constants/bookingConstants";

import getErrorMessage from "../../utils/getErrorMessage";
import getStripe from "../../utils/getStripe";

const RoomDetails = () => {
  const [checkInDate, setCheckInDate] = useState();
  const [checkOutDate, setCheckOutDate] = useState();
  const [daysOfStay, setDaysOfStay] = useState();
  const [paymentLoading, setPaymentLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const { dates } = useSelector((state) => state.bookedDates);
  const { user } = useSelector((state) => state.loadedUser);
  const { room, error } = useSelector((state) => state.roomDetails);
  const { available, loading: bookingLoading } = useSelector(
    (state) => state.checkBooking
  );

  const excludedDates = [];
  dates.forEach((date) => {
    excludedDates.push(new Date(date));
  });

  const { id } = router.query;

  const onChange = (selectedDates) => {
    const [newCheckInDate, newCheckOutDate] = selectedDates;

    setCheckInDate(newCheckInDate);
    setCheckOutDate(newCheckOutDate);

    if (newCheckInDate && newCheckOutDate) {
      // Calculating days of stay
      const days = Math.floor(
        (new Date(newCheckOutDate) - new Date(newCheckInDate)) / 86400000 + 1
      );

      setDaysOfStay(days);

      dispatch(
        checkBooking(
          id,
          newCheckInDate.toISOString(),
          newCheckOutDate.toISOString()
        )
      );
    }
  };

  const bookRoom = async (roomId, pricePerNight) => {
    setPaymentLoading(true);

    const amount = pricePerNight * daysOfStay;

    try {
      const link = `/api/checkout_session/${roomId}?checkInDate=${checkInDate.toISOString()}&checkOutDate=${checkOutDate.toISOString()}&daysOfStay=${daysOfStay}`;

      const { data } = await axios.get(link, { params: { amount } });

      const stripe = await getStripe();

      // Redirect to checkout
      stripe.redirectToCheckout({ sessionId: data.id });
    } catch (err) {
      toast.error(getErrorMessage(err));
    } finally {
      setPaymentLoading(false);
    }
  };

  useEffect(() => {
    dispatch(getBookedDates(id));

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    return () => {
      dispatch({ type: CHECK_BOOKING_RESET });
    };
  }, [dispatch, id, error]);

  return (
    <>
      <Head>
        <title>{room.name ? `${room.name} - Resorts Reservation` : "Room details"}</title>
      </Head>

      <div className="container container-fluid room-details">
        <h2 className="mt-5">{room.name}</h2>
        <p className="text-muted">
          <i className="fa fa-map-marker mr-1" aria-hidden="true"></i>
          {room.address}
        </p>

        <div className="ratings mt-auto mb-3">
          <div className="rating-outer">
            <div
              className="rating-inner"
              style={{ width: `${(room.ratings / 5) * 100}%` }}
            ></div>
          </div>
          <span id="no_of_reviews">({room.numOfReviews} reviews)</span>
        </div>

        <Carousel hover="pause" className="room-details__carousel">
          {room.images &&
            room.images.map((image) => (
              <Carousel.Item key={image.public_id}>
                <div style={{ position: "relative", width: "100%", height: "440px" }}>
                  <Image
                    className="d-block m-auto"
                    src={image.url}
                    alt={room.name}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </Carousel.Item>
            ))}
        </Carousel>

        <div className="row my-5">
          <div className="col-12 col-md-6 col-lg-8">
            <h3>Description</h3>
            <p>{room.description}</p>

            <RoomFeatures room={room} />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="booking-card shadow-lg p-4" style={{ position: "sticky", top: "5.5rem" }}>
              <p className="price-per-night mb-0">
                <b>Ksh {room.pricePerNight}</b>
              </p>
              <span className="text-muted" style={{ fontSize: "0.9rem" }}>
                per night
              </span>

              <hr />

              <p className="mb-3 font-weight-bold">
                Pick check-in &amp; check-out dates
              </p>

              <DatePicker
                className="w-100"
                selected={checkInDate}
                onChange={onChange}
                startDate={checkInDate}
                endDate={checkOutDate}
                minDate={new Date()}
                excludeDates={excludedDates}
                selectsRange
                inline
              />

              {available === true && (
                <div className="mx-auto alert alert-success my-3 font-weight-bold">
                  <i className="fa fa-check-circle mr-1"></i> This resort is
                  available.
                </div>
              )}

              {available === false && (
                <div className="alert alert-danger my-3 font-weight-bold">
                  Not available for these dates. Try a different range.
                </div>
              )}

              {available && !user && (
                <div className="alert alert-warning my-3 font-weight-bold">
                  <Link href="/login">
                    <a>Login</a>
                  </Link>{" "}
                  to book this resort.
                </div>
              )}

              {available && user && (
                <button
                  className="btn btn-block py-3 booking-btn"
                  onClick={() => bookRoom(room._id, room.pricePerNight)}
                  disabled={bookingLoading || paymentLoading}
                >
                  {paymentLoading
                    ? "Redirecting to payment..."
                    : `Pay - Ksh ${daysOfStay * room.pricePerNight}`}
                </button>
              )}
            </div>
          </div>
        </div>

        <NewReview />

        {room.reviews && room.reviews.length > 0 ? (
          <ListReviews reviews={room.reviews} />
        ) : (
          <p className="text-muted mb-5">
            <b>No reviews yet for this room.</b>
          </p>
        )}
      </div>
    </>
  );
};

export default RoomDetails;
