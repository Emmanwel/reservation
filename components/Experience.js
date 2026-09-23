import React from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "../styles/Hometop.module.css";

const destinations = [
  { name: "Nairobi", tag: "City breaks", image: "/images/212.jpg" },
  { name: "Mombasa", tag: "Coastal escapes", image: "/images/watamu.webp" },
  { name: "Kitale", tag: "Mountain trails", image: "/images/gallery-04.jpg" },
  { name: "Naivasha", tag: "Lakeside stays", image: "/images/gallery-06.jpg" },
];

const Experience = () => {
  return (
    <div className={styles.experience}>
      <Container>
        <Row>
          <Col lg="6">
            <span className={styles.eyebrow}>Why travel with us</span>
            <div className={styles.experience__content}>
              <h2>
                With all our experience,
                <br /> we will serve you well
              </h2>
              <p>
                Step into a world of limitless possibilities as you explore
                our carefully crafted stays, tailored to your unique
                interests and desires.
              </p>
            </div>
            <div className={styles.counter__wrapper}>
              <div className={styles.counter__box}>
                <span>12k+</span>
                <h6>Regular clients</h6>
              </div>
              <div className={styles.counter__box}>
                <span>12</span>
                <h6>Years in service</h6>
              </div>
              <div className={styles.counter__box}>
                <span>All</span>
                <h6>Locations covered</h6>
              </div>
            </div>
          </Col>

          <Col lg="6">
            <span className={styles.eyebrow}>Where will you go next?</span>
            <div className={styles.experience__content}>
              <h2>Pick your next escape</h2>
            </div>
            <div className={styles.destination__grid}>
              {destinations.map((place) => (
                <a
                  href={`/?location=${encodeURIComponent(place.name)}`}
                  className={styles.destination__card}
                  key={place.name}
                >
                  <img src={place.image} alt={place.name} />
                  <div className={styles.destination__overlay}>
                    <h3>{place.name}</h3>
                    <span>{place.tag}</span>
                  </div>
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
