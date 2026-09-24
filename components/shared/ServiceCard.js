import React from "react";
import styles from "../../styles/Hometop.module.css";

const ServiceCard = ({ item }) => {
  const { icon, title, desc } = item;
  return (
    <div className={styles.service__item}>
      <div className={styles.service__img}>
        <i className={`fa ${icon}`} aria-hidden="true"></i>
      </div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
};

export default ServiceCard;
