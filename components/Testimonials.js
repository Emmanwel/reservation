import React from "react";
import Slider from "react-slick";
import gallery4 from "../assets/images/gallery-04.jpg";
import gallery5 from "../assets/images/gallery-05.jpg";
import styles from "../styles/Hometop.module.css";
import Image from "next/image";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoPlaySpeed: 2000,
    slideToShow: 3,

    responsive: [
      {
        breakpoints: 992,

        settings: {
          slideToShow: 2,
          slideToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoints: 576,

        settings: {
          slideToShow: 1,
          slideToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <div className={styles.testmonial}>
          <p>
            shhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          </p>
          <div className={styles.avatar}>
            <Image src={gallery4} className={styles.avatars} />
            <div>
              <h6 className={styles.name}>Mukhebi</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className={styles.testmonial}>
          <p>
            shhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          </p>
          <div className={styles.avatar}>
            <Image src={gallery4} className={styles.avatars} />
            <div>
              <h6 className={styles.name}>Mukhebi</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className={styles.testmonial}>
          <p>
            shhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          </p>
          <div className={styles.avatar}>
            <Image src={gallery4} className={styles.avatars} />
            <div>
              <h6 className={styles.name}>Mukhebi</h6>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Testimonials;
