import React from "react";
import { FormGroup, Form, Col } from "reactstrap";
import styles from "../../styles/Hometop.module.css";

const SearchBar = () => {
  return (
    <div>
      <Col lg="12">
        <div className={styles.search__bar}>
          <Form className={styles.forms} d-flex align-items-center gap-4>
            <FormGroup className={styles.form__group} d-flex gap-78>
              <div>
                <button disabled className={styles.button}>
                  Located in Multiple Locations{" "}
                </button>
              </div>
            </FormGroup>
          </Form>
        </div>
      </Col>
    </div>
  );
};

export default SearchBar;
