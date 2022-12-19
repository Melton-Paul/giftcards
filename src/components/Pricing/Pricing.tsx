import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <section
      data-aos="slide-left"
      data-aos-duration="900"
      className={`${styles.pricing} container`}
    >
      <h2 className={styles["pricing-title"]}>
        GoLoRewards is a One-Price fits all service, made for the little guys.
      </h2>
      <p>
        No extra fees for branding, admin fees, or delivery. Pay one price, no
        extras or hidden fees.
      </p>
      <div className={styles["card-container"]}>
        <article className={`${styles.card}`}>
          <header className={styles.card__header}>
            <h3 className={styles.plan__name}>Monthly</h3>
            <span className={styles.plan__price}>$14</span>
            <span className={styles["plan__billing-cycle"]}>/month</span>
            <span className={styles.plan__description}>Easy start</span>
          </header>
          <div className={styles.card__body}>
            <ul className={`${styles.list}`}>
              <li>Digital and Physical Giftcards</li>
              <li>Branding</li>
              <li>Online Access</li>
              <li>In-person support</li>
            </ul>
            <button className={styles.plan__button}>Buy Now</button>
          </div>
        </article>
        <article className={`${styles.card}`}>
          <header className={styles.card__header}>
            <h3 className={styles.plan__name}>Yearly</h3>
            <span className={styles.plan__price}>$151</span>
            <span className={styles["plan__billing-cycle"]}>/year</span>
            <span className={styles.badge}>10% OFF</span>

            <span className={styles.plan__description}>
              You're completely set!
            </span>
          </header>
          <div className={styles.card__body}>
            <ul className={`${styles.list}`}>
              <li>Digital and Physical Giftcards</li>
              <li>Branding</li>
              <li>Online Access</li>
              <li>In-person support</li>
            </ul>
            <button className={styles.plan__button}>Buy Now</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Pricing;
