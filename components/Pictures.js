import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "./shared/Subtitle";
import styles from "../styles/Hometop.module.css";
import MasonryImagesGallery from "./image_gallery/MasonryImagesGallery";
import Testimonials from "./Testimonials";

const Pictures = () => {
  return (
    <>
      <div className="row text-center pt-4">
        <div className="col">
          <h5 className="display-4">
            <span className="text-teal ">Photo</span> Gallery
          </h5>
          <h2 className={styles.gallery__title}>
            Our best Resorts Photos with there on point ambience. Welcome All.
          </h2>
        </div>
      </div>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Pictures;

/** 
/*
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Our Customer Opinions "} />
              <h2 className={styles.testimonial__title}>
                What Our Visitors have said about
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      **/
