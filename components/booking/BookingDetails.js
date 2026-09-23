import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { clearErrors } from "../../redux/actions/bookingActions";

const BookingDetails = () => {
  const dispatch = useDispatch();

  const { booking, error } = useSelector((state) => state.bookingDetails);
  const { user } = useSelector((state) => state.loadedUser);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  const isPaid = booking?.paymentInfo?.status === "paid";

  return (
    <div className="container">
      <div className="row d-flex justify-content-between">
        <div className="col-12 col-lg-8 mt-5 booking-details">
          {booking && booking.room && booking.user && (
            <>
              <h2 className="mb-5">Booking #{booking._id}</h2>

              <h4 className="mb-4">Guest information</h4>
              <p>
                <b>Name:</b> {booking.user && booking.user.name}
              </p>
              <p>
                <b>Email:</b> {booking.user && booking.user.email}
              </p>
              <p>
                <b>Amount:</b> Ksh {booking.amountPaid}
              </p>

              <hr />

              <h4 className="mb-4">Booking information</h4>
              <p>
                <b>Check-in:</b>{" "}
                {new Date(booking.checkInDate).toLocaleDateString("en-US")}
              </p>

              <p>
                <b>Check-out:</b>{" "}
                {new Date(booking.checkOutDate).toLocaleDateString("en-US")}
              </p>

              <p>
                <b>Length of stay:</b> {booking.daysOfStay} day
                {booking.daysOfStay > 1 ? "s" : ""}
              </p>

              <hr />

              <h4 className="my-4">Payment status</h4>
              <p className={isPaid ? "greenColor" : "redColor"}>
                <b>{isPaid ? "Paid" : "Not paid"}</b>
              </p>

              {user && user.role === "admin" && (
                <>
                  <h4 className="my-4">Stripe payment ID</h4>
                  <p className="redColor">
                    <b>{booking.paymentInfo.id}</b>
                  </p>
                </>
              )}

              <h4 className="mt-5 mb-4">Booked room</h4>

              <hr />
              <div className="cart-item my-1">
                <div className="row my-5 align-items-center">
                  <div className="col-4 col-lg-2">
                    <div style={{ position: "relative", width: "100%", height: 60 }}>
                      <Image
                        src={booking.room.images[0].url}
                        alt={booking.room.name}
                        layout="fill"
                        objectFit="cover"
                        style={{ borderRadius: "var(--radius-sm)" }}
                      />
                    </div>
                  </div>

                  <div className="col-5 col-lg-5">
                    <Link href={`/room/${booking.room._id}`}>
                      <a>{booking.room.name}</a>
                    </Link>
                  </div>

                  <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                    <p className="mb-0">Ksh {booking.room.pricePerNight}</p>
                  </div>

                  <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                    <p className="mb-0">
                      {booking.daysOfStay} day{booking.daysOfStay > 1 ? "s" : ""}
                    </p>
                  </div>
                </div>
              </div>
              <hr />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
