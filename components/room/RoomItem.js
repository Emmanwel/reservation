import React from "react";
import Image from "next/image";
import Link from "next/link";

const RoomItem = ({ room }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <Link href={`/room/${room._id}`}>
        <a className="card p-2 text-decoration-none h-100 d-block">
          <div style={{ position: "relative", width: "100%", height: 170 }}>
            <Image
              className="card-img-top"
              src={room.images[0].url}
              layout="fill"
              objectFit="cover"
              alt={room.name}
            />
            <span
              className="badge"
              style={{
                position: "absolute",
                top: 10,
                left: 10,
                background: "var(--color-surface)",
                color: "var(--color-ink)",
                fontWeight: 600,
                padding: "0.3rem 0.7rem",
                borderRadius: "var(--radius-full)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              {room.category}
            </span>
          </div>

          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{room.name}</h5>

            <div className="ratings mt-auto mb-3">
              <p className="card-text mb-1">
                <strong>
                  <b>Ksh {room.pricePerNight}</b>
                </strong>{" "}
                <span style={{ fontSize: "0.9rem", color: "var(--color-ink-faint)" }}>
                  / night
                </span>
              </p>

              <div className="rating-outer">
                <div
                  className="rating-inner"
                  style={{ width: `${(room.ratings / 5) * 100}%` }}
                ></div>
              </div>
              <span id="no_of_reviews">({room.numOfReviews} reviews)</span>
            </div>

            <span className="btn btn-block view-btn text-white">
              View details
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default RoomItem;
