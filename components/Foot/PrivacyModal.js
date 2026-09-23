import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import styles from "../../styles/ReaF.module.css";

const PrivacyModal = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button className={styles.item1} onClick={() => setOpen(true)}>
        Privacy Policy
      </button>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <div style={{ maxWidth: 520, padding: "0.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-display)" }}>Privacy Policy</h2>
          <p>
            The privacy and security of your information is very important to
            us. Whether you are booking a room or just a prospective guest
            browsing our site and looking at our properties and services, we
            want you to trust that the information you share with us is
            properly managed and protected.
          </p>
          <p>
            We collect your personal information on the site to enhance the
            services we offer you, maintain and improve the site, protect the
            security of you and our site, comply with legal obligations, and
            keep you informed about other services that may be of interest to
            you.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default PrivacyModal;
