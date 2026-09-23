import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Hometop.module.css";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (location.trim()) params.set("location", location.trim());
    if (guests) params.set("guests", guests);

    router.push(`/?${params.toString()}`);
  };

  return (
    <div className={styles.search__bar}>
      <form className={styles.search__form} onSubmit={submitHandler}>
        <div className={styles.search__field}>
          <span className="fa fa-map-marker" aria-hidden="true"></span>
          <input
            type="text"
            placeholder="Where are you headed?"
            aria-label="Destination"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className={styles.search__divider}></div>

        <div className={styles.search__field}>
          <span className="fa fa-users" aria-hidden="true"></span>
          <select
            aria-label="Number of guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            <option value="">Any guests</option>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>
                {num} guest{num > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className={styles.search__submit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
