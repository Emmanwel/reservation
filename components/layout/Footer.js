import React from "react";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.data}>
              <h3 className={styles.title}>Travel</h3>
              <p className={styles.description}>
                Travel you choose the <br /> destination, we offer you the{" "}
                <br /> experience.
              </p>
            </div>

            <div className={styles.data}>
              <h3 className={styles.subtitle}>About</h3>
              <ul>
                <li className={styles.item}>
                  <a href="" className={styles.link}>
                    About Us
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="" className={styles.link}>
                    Features
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="" className={styles.link}>
                    New & Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.data}>
              <h3 className={styles.subtitle}>Company</h3>
              <ul>
                <li className={styles.item}>
                  <a href="" className={styles.link}>
                    Team
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="" className={styles.link}>
                    Plan y Pricing
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="" className={styles.link}>
                    Become a member
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.data}>
              <h3 className={styles.subtitle}>Support</h3>
              <ul>
                <li className={styles.item}>
                  <a href="" className={styles.link}>
                    FAQs
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="" className={styles.link}>
                    Support Center
                  </a>
                </li>
                <li className={styles.item}>
                  <a href="" className={styles.link}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.rights}>
            <p className={styles.copy}>
              &#169; 2021 Bedimcode. All rigths reserved.
            </p>
            <div className={styles.terms}>
              <a href="#" className={styles.terms}>
                Terms & Agreements
              </a>
              <a href="#" className={styles.terms}>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
