import React from "react";
import { Container, Row, Col } from "reactstrap";
import capture from "../../assets/capture.png";
import ker from "../../assets/ker.jpg";
import ed from "../../assets/ed.jpg";
import Image from "next/image";
import styles from "../../styles/Hometop.module.css";

const testimonials = [
  {
    image: capture,
    name: "Emmanuel Mukhebi",
    role: "Local",
    quote:
      "In terms of importance when planning a holiday, this was one of the best -- it goes beyond the usual preference of the average traveller.",
  },
  {
    image: ed,
    name: "Lyton Nelly",
    role: "Tourist",
    quote:
      "The resort demonstrated a real affinity for technology, with thoughtful in-room options and no shortage of entertainment.",
  },
  {
    image: ker,
    name: "Collete Opiyo",
    role: "Visitor",
    quote:
      "The resort offered a genuinely stress-relieving environment -- well worth commending for the conditions alone.",
  },
];

const TopSection = () => {
  return (
    <section className={styles.testimonials} id="testimonials">
      <Container>
        <Row>
          <Col lg="6">
            <span className={styles.eyebrow}>Testimonials</span>
            <h2 className={styles.gallery__title}>
              What our guests have to say
            </h2>
          </Col>
        </Row>

        <div className={styles.testimonial__grid}>
          {testimonials.map((t) => (
            <div className={styles.testimonial__card} key={t.name}>
              <p className={styles.testimonial__quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.testimonial__person}>
                <div className={styles.testimonial__avatar}>
                  <Image src={t.image} alt={t.name} width={52} height={52} />
                </div>
                <div>
                  <h6>{t.name}</h6>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TopSection;
