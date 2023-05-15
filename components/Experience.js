import React from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "../styles/Hometop.module.css";
import Subtitle from "./shared/Subtitle";
import SearchBar from "./shared/SearchBar";
import Image from "next/image";

const Experience = () => {
  return (
    <div className={styles.experience}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className={styles.experience__content}>
                <h2>
                  With All Experience <br /> We will serve you
                </h2>
                <p>
                  Step into a world of limitless possibilities as you explore
                  our carefully crafted experiences, tailored to cater to your
                  unique interests and desires.
                </p>
              </div>
              <div className={styles.counter__wrapper}>
                <div className={styles.counter__box}>
                  <span>12k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className={styles.counter__box}>
                  <span>12</span>
                  <h6>Years in Service</h6>
                </div>
                <div className={styles.counter__box}>
                  <span>All...</span>
                  <h6>Location</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className={styles.experience__content}>
                <h2>Where Will You Go Next?</h2>
                <p>
                  Adventure awaits in the Sunshine State. Celebrate outdoors in
                  this Cities, from thrilling theme parks to palm-filled resorts
                  and nature trails.
                </p>
              </div>
              <div className={styles.card}>
                <div className={styles.flip_card}>
                  <div className={styles.flip_card_inner}>
                    <div className={styles.flip_card_front}>
                      <img src="/images/img2.jpg" alt="Avatar" />
                    </div>
                    <div className={styles.flip_card_back}>
                      <h1>Kitale</h1>

                      <p>Let Us Explore</p>
                    </div>
                  </div>
                </div>
                <div className={styles.flip_card}>
                  <div className={styles.flip_card_inner}>
                    <div className={styles.flip_card_front}>
                      <img src="/images/12.jpg" alt="Avatar" />
                    </div>
                    <div className={styles.flip_card_back}>
                      <h1>Mombasa</h1>
                      <p>Let Us Explore</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Experience;
