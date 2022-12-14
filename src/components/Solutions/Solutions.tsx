import styles from "./Solutions.module.css";
const money = require("../../images/currency.png");
const trophy = require("../../images/trophy.png");
const branding = require("../../images/staff.png");

const Solutions = () => {
  return (
    <section className={`${styles.solutions} container`}>
      <p className={styles["solutions-desc"]}>
        GoLoRewards is the easiest and best way to promote your branding while
        also giving your customers, employees, and clients the ability to
        recieve incentives for their patronage to your business!
      </p>
      <div className={styles["solutions-container"]}>
        <article>
          <h3>GoLoRewards has solutions for every business and industry</h3>
          <ul className={styles["solutions-list"]}>
            <li>
              <div className={styles["img-container"]}>
                <img src={money} alt="" />
              </div>
              <div>
                <h4>Simple rewards and incentives</h4>
                <p>
                  Switching your rewards or incentive program to GoLoRewards
                  makes it simple to keep track and monitor rewards!
                </p>
              </div>
            </li>
            <li>
              <div className={styles["img-container"]}>
                <img src={trophy} alt="" />
              </div>
              <div>
                <h4>Easy Prizes for competitions</h4>
                <p>
                  Easily promote your brand by running competitions and
                  rewarding gift cards, it's a win win for you.
                </p>
              </div>
            </li>
            <li>
              <div className={styles["img-container"]}>
                <img src={branding} alt="" />
              </div>
              <div>
                <h4>Branding makes a difference</h4>
                <p>
                  Having gift cards and rewards cards that promote your business
                  can easily not only get new customers, but also remind those
                  that you already have!
                </p>
              </div>
            </li>
          </ul>
        </article>
        <article className={styles["cta-container"]}>
          <h3>Why Choose GoLoRewards?</h3>
          <p>Because we are your one stop shop for everything giftcards!</p>
          <ul>
            <li>Branding</li>
            <li>Physical Gift Cards</li>
            <li>A friendly face to aid you in the process</li>
            <li></li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Solutions;
