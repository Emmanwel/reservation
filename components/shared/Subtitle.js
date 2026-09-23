import React from "react";
import styles from "../../styles/Hometop.module.css";

const Subtitle = ({ subtitle }) => {
  return <span className={styles.eyebrow}>{subtitle}</span>;
};

export default Subtitle;
