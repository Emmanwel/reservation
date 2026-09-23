import React from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "../styles/Hometop.module.css";
import MasonryImagesGallery from "./image_gallery/MasonryImagesGallery";

const Pictures = () => {
  return (
    <section className={styles.gallerySection}>
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <span className={styles.eyebrow}>Gallery</span>
            <h2 className={styles.gallery__title}>
              A glimpse of the destinations waiting for you
            </h2>
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Pictures;
