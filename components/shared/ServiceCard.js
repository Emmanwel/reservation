import React from "react";
import styles from "../../styles/Hometop.module.css";
import Image from "next/image";

const ServiceCard = ({ item }) => {
  const { imgUrl, title, desc } = item;
  return (
    <div className={styles.service__item}>
      <div className={styles.service__img}>
        <Image src={imgUrl} alt="Services" className={styles.service__images} />
      </div>
      <h5>{title}</h5>
      <p>{desc}</p>
    </div>
  );
};

export default ServiceCard;
