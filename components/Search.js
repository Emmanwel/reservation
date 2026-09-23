import React, { useState } from "react";
import { useRouter } from "next/router";

const ROOM_CATEGORIES = ["King", "Single", "Twins"];

const Search = () => {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (location.trim()) params.set("location", location.trim());
    if (guests) params.set("guests", guests);
    if (category) params.set("category", category);

    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="container container-fluid">
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form className="shadow-lg search-form" onSubmit={submitHandler}>
            <span className="fa fa-search" style={{ color: "var(--color-accent)" }} />
            <h2 className="mb-3 mt-2">Search rooms</h2>
            <div className="form-group">
              <label htmlFor="location_field">Location</label>
              <input
                type="text"
                className="form-control"
                id="location_field"
                placeholder="e.g. Nairobi"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="guest_field">Number of guests</label>
              <select
                className="form-control"
                id="guest_field"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                <option value="">Any</option>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="room_type_field">Room type</label>
              <select
                className="form-control"
                id="room_type_field"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Any</option>
                {ROOM_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-block py-2">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
