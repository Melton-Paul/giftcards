import EmailForm from "../EmailForm";
import styles from "./ContactSales.module.css";

const ContactSales = () => {
  return (
    <section className={styles.contact}>
      <h2>Contact Us</h2>
      <EmailForm />
    </section>
  );
};

export default ContactSales;
