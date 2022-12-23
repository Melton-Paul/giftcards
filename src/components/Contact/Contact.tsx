import Questions from "../Questions/Questions";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div
      data-aos="slide-left"
      data-aos-duration="900"
      className={styles.contact}
    >
      <Questions />
    </div>
  );
};

export default Contact;
