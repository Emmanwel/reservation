import React from "react";

import PrivacyModal from "./PrivacyModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "../../styles/ReaF.module.css";

const ReaF = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_container}>
        <div className={styles.item1}>
          <PrivacyModal />
        </div>

        <div className={styles.item2}>
          <span style={{ paddingRight: 5 }}>Copyright </span>
          <FontAwesomeIcon icon={faCopyright} />{" "}
          <span style={{ paddingLeft: 5 }}>
            {new Date().getFullYear()} Mahjong Resorts Reservation. All Rights
            Reserved.
          </span>
        </div>
      </div>

      {false && <PrivacyModal click={true} />}
    </footer>
  );
};

export default ReaF;
