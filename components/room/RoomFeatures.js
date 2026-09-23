import React from "react";

const FEATURES = [
  { key: "guestCapacity", icon: "fa-users", label: (room) => `${room.guestCapacity} Guests` },
  { key: "numOfBeds", icon: "fa-bed", label: (room) => `${room.numOfBeds} Beds` },
  { key: "breakfast", icon: "fa-cutlery", label: () => "Breakfast" },
  { key: "internet", icon: "fa-wifi", label: () => "Internet" },
  { key: "airConditioned", icon: "fa-snowflake-o", label: () => "Air conditioned" },
  { key: "petsAllowed", icon: "fa-paw", label: () => "Pets allowed" },
  { key: "roomCleaning", icon: "fa-magic", label: () => "Room cleaning" },
];

const RoomFeatures = ({ room }) => {
  return (
    <div className="features mt-5">
      <h3 className="mb-4">Features</h3>
      <div className="row">
        {FEATURES.map(({ key, icon, label }) => {
          const isBoolean = key !== "guestCapacity" && key !== "numOfBeds";
          const available = isBoolean ? Boolean(room[key]) : true;

          return (
            <div className="col-6 col-md-4 room-feature" key={key}>
              <i
                className={`fa ${icon} fa-fw`}
                aria-hidden="true"
                style={{
                  color: available ? "var(--color-primary)" : "var(--color-border)",
                }}
              ></i>
              <p style={{ color: available ? undefined : "var(--color-ink-faint)" }}>
                {label(room)}
                {isBoolean && !available && (
                  <span style={{ fontSize: "0.8rem" }}> (not included)</span>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoomFeatures;
