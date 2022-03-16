import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import styles from "../../styles/ReaF.module.css";

const PrivacyModal = (props) => {
  const [open, setOpen] = React.useState(false);
  const policyText = (
    <p>
      The privacy and security of your information is very important to us.
      Whether you are booking a room or just a prospective client browsing our
      website (the “Site”) and looking at our proper-ty/services, we want you to
      trust that the information that you have provided to us is being proper-ly
      managed and protected.
    </p>
  );
  const policyText2 = (
    <p>
      We collect your Personal Information on the Site to enhance the services
      we offer you, maintain and improve the Site, protect the security of you
      and our Site, comply with legal obligations, and inform you about other
      services and products that may be available through us, our affiliated
      companies, or through our marketing alliances.
    </p>
  );
  return (
    <>
      <button className={styles.item1} onClick={() => setOpen(true)}>
        Privacy Policy
      </button>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <h2>Privacy Policy</h2>
        {policyText}
       
        {policyText2}
      </Modal>
    </>
  );
};

export default PrivacyModal;
