import React from "react";
import Link from "next/link";

import PrivacyModal from "./PrivacyModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../styles/ReaF.module.css";

const ReaF = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div>
          <div className={styles.brand}>
            <img src="/images/bookit_logo.png" alt="Resorts Reservation" />
          </div>
          <p className={styles.tagline}>
            You choose the destination, we take care of the experience --
            from booking to check-out.
          </p>
          <div className={styles.social}>
            <a
              href="#"
              className={styles.socialLink}
              aria-label="Facebook"
              onClick={(e) => e.preventDefault()}
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="#"
              className={styles.socialLink}
              aria-label="YouTube"
              onClick={(e) => e.preventDefault()}
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="#"
              className={styles.socialLink}
              aria-label="GitHub"
              onClick={(e) => e.preventDefault()}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>

        <div>
          <h6 className={styles.heading}>Explore</h6>
          <ul className={styles.linkList}>
            <li>
              <Link href="/">
                <a className={styles.item1}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/search">
                <a className={styles.item1}>Find a room</a>
              </Link>
            </li>
            <li>
              <Link href="/bookings/me">
                <a className={styles.item1}>My bookings</a>
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className={styles.heading}>Company</h6>
          <ul className={styles.linkList}>
            <li>
              <PrivacyModal />
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <span className={styles.item2}>
          &copy; {new Date().getFullYear()} Resorts Reservation. All rights
          reserved.
        </span>
      </div>
    </footer>
  );
};

export default ReaF;
