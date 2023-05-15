import React from "react";
import styles from "../../styles/Hometop.module.css";

const Subtitle = ({ subtitle }) => {
  return (
    <div>
      <h3 className={styles.section__subtitle}>{subtitle}</h3>
    </div>
  );
};

export default Subtitle;
