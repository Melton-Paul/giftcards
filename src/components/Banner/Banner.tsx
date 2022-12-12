import styles from "./Banner.module.css";
const trophy = require("../../images/trophy.png");
const gift = require("../../images/gift.png");
const currency = require("../../images/currency.png");
const winner = require("../../images/winner.png");
const staff = require("../../images/staff.png");

const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={`${styles["banner-content"]} container`}>
        <h2>Use our gift cards for...</h2>
        <section className={styles["banner-container"]}>
          <article className={styles["banner-item"]}>
            <div className={styles["banner-item_img"]}>
              <img src={trophy} alt="trophy" />
            </div>
            <h3>Rewards Programs</h3>
          </article>
          <article className={styles["banner-item"]}>
            <div className={styles["banner-item_img"]}>
              <img src={gift} alt="trophy" />
            </div>
            <h3>Gifts</h3>
          </article>
          <article className={styles["banner-item"]}>
            <div className={styles["banner-item_img"]}>
              <img src={currency} alt="trophy" />
            </div>
            <h3>Payment Options</h3>
          </article>
          <article className={styles["banner-item"]}>
            <div className={styles["banner-item_img"]}>
              <img src={winner} alt="trophy" />
            </div>
            <h3>Competition Prizes</h3>
          </article>
          <article className={styles["banner-item"]}>
            <div className={styles["banner-item_img"]}>
              <img src={staff} alt="trophy" />
            </div>
            <h3>Staff Incentives</h3>
          </article>
        </section>
      </div>
    </section>
  );
};
export default Banner;
