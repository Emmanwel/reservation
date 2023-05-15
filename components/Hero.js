import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "./shared/Subtitle";
import styles from "../styles/Hometop.module.css";
import SearchBar from "./shared/SearchBar";
import ServiceList from "./shared/ServiceList";

const Hero = () => {
  return (
    <>
      <Container className={styles.heroes}>
        <Row>
          <Col lg="6">
            <div className={styles.hero__content}>
              <div className={styles.hero__subtitle}>
                <Subtitle subtitle={"Know Before you Come"} />
                <img
                  style={{ cursor: "pointer" }}
                  src="/images/mah.jpg"
                  alt="BookIT"
                  className={styles.logo}
                />
              </div>
              <h1>
                Come Visit Us & Experience Memorable
                <br />
                <span className={styles.highlight}>Hospitality</span>
              </h1>
              <p>
                Our Resorts Reservation Application showcases a strong emphasis
                on technology, offering a range of sophisticated in-room options
                and abundant entertainment choices
              </p>
            </div>
          </Col>

          <Col lg="2">
            <div className={styles.hero__img__box1}>
              <img src="images/12.jpg" />
            </div>
          </Col>

          <Col lg="2">
            <div className={styles.hero__img__box2}>
              <video src="images/hero-video.mp4" />
            </div>
          </Col>

          <Col lg="2">
            <div className={styles.hero__img__box3}>
              <img src="images/gallery-03.jpg" />
            </div>
          </Col>

          <SearchBar />
        </Row>
      </Container>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className={styles.services__subtitle}>What we Offer</h5>
              <h2 className={styles.services__title}>
                We offer our best services
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Hero;
