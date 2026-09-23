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
        <div className={styles.hero__grid}>
          <div className={styles.hero__content}>
            <Subtitle subtitle="Know before you come" />
            <h1>
              Come visit us &amp; experience memorable
              <br />
              <span className={styles.highlight}>hospitality</span>
            </h1>
            <p>
              Our resorts showcase a strong emphasis on comfort and
              technology, offering a range of sophisticated in-room options
              and abundant entertainment choices for every kind of traveller.
            </p>

            <SearchBar />
          </div>

          <div className={styles.hero__collage}>
            <div className={styles.hero__collage__main}>
              <img src="/images/img3.jpg" alt="Overwater bungalow at sunset" />
            </div>
            <div className={styles.hero__collage__tile}>
              <video
                src="/images/hero-video.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
            <div className={styles.hero__collage__tile}>
              <img src="/images/gallery-07.jpg" alt="Overwater walkway" />
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.pads}>
        <Container>
          <Row>
            <Col lg="4">
              <span className={styles.eyebrow}>What we offer</span>
              <h2 className={styles.services__title}>
                We offer our best services
              </h2>
            </Col>
          </Row>
          <div className={styles.services__grid}>
            <ServiceList />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
