import EmailForm from "../EmailForm";
import styles from "./ContactSales.module.css";

const ContactSales = () => {
  return (
    <section className={styles.contact}>
      <h2 className={styles["contact-title"]}>Contact Us</h2>
      <EmailForm />
    </section>
  );
};

export default ContactSales;
