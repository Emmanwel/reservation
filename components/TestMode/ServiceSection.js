import React from "react";
import styles from "../../styles/Top.module.css";
import Image from "next/image";

const ServiceSection = () => {
  return (
    <div className={styles.body}>
      <div className={styles.heading}>
        <h1>Where Will You Go Next?</h1>
        <br />
        <p>
          Adventure awaits in the Sunshine State. Celebrate outdoors in this
          Cities, from thrilling theme parks to palm-filled resorts and nature
          trails.{" "}
        </p>
        <br />
        <br />
        <a href="/search">Explore</a>
      </div>
      <div className={styles.tours}>
        <div className={styles.places}>
          <h2>Nairobi</h2>
          <Image
            src="/images/12.jpg"
            alt="Picture of the author"
            width={300}
            height={180}
          />
          <br />
          <br />

          <a href="/search">Book Now</a>
        </div>
        <div className={styles.places}>
          <h2>Kitale</h2>
          <Image
            src="/images/img2.jpg"
            alt="Picture of the author"
            width={300}
            height={180}
          />
          {/* <img
            src="img2.jpg"
            style="width: 300px; height: 250px; border-radius: 12px;"
          /> */}
          <br />
          <br />
          <a href="#">Book Now</a>
        </div>
        <div className={styles.places}>
          <h2>Mombasa</h2>
          <Image
            src="/images/12345.jpg"
            alt="Picture of the author"
            width={300}
            height={180}
          />
          {/* <img
            src="img3.jpg"
            style="width: 300px; height: 250px; border-radius: 12px;"
          /> */}
          <br />
          <br />
          <a href="#">Book Now</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
