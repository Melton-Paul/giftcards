import EmailForm from "../EmailForm";
import styles from "./ContactSales.module.css";
import { useLocation } from "react-router";

const ContactSales = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <section
      data-aos="slide-left"
      data-aos-duration="1000"
      className={`${styles.contact} container`}
    >
      <article>
        <h2 className={styles["contact-title"]}>
          Contact our {pathName === "/contact-sales" ? "sales" : "support"} team
        </h2>
        <p className={styles["contact-body"]}>
          {pathName === "/contact-sales"
            ? "Let's explore how GoLoRewards can work for you."
            : "Get help with your rewards or gift card!"}
        </p>
        <div className={styles["support-box"]}>
          {pathName === "/contact-sales" ? (
            <ul className={styles["support-box--list"]}>
              <li>
                <i className="fa fa-check"></i>
                <p>One flexible tool for your entire company</p>
              </li>
              <li>
                <i className="fa fa-check"></i>
                <p>One flexible tool for your entire company</p>
              </li>
              <li>
                <i className="fa fa-check"></i>
                <p>One flexible tool for your entire company</p>
              </li>
            </ul>
          ) : (
            <p>contact@golorewards.come</p>
          )}
        </div>
      </article>
      <article>
        <EmailForm />
      </article>
    </section>
  );
};

export default ContactSales;
