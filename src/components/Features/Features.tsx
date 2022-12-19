import Media from "../UI/Media/Media";
import styles from "./Features.module.css";
const laptop = require("../../images/laptop.png");
const money = require("../../images/currency.png");
const trophy = require("../../images/trophy.png");
const branding = require("../../images/staff.png");

const Features = () => {
  return (
    <section>
      <article className={`${styles["features-article"]}`}>
        <h2 className={styles["features-article__title"]}>
          Manage rewards info ONLINE
        </h2>
        <Media img={laptop} className={styles["media-img"]}>
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
        </Media>
      </article>
      <article className={styles["features-article"]}>
        <h2 className={styles["features-article__title"]}>
          Manage rewards info ONLINE
        </h2>
        <Media img={laptop} className={styles["media-img"]}>
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
        </Media>
      </article>
      <article className={styles["features-article"]}>
        <h2 className={styles["features-article__title"]}>
          Manage rewards info ONLINE
        </h2>
        <Media img={laptop} className={styles["media-img"]}>
          <ul className={styles["solutions-list"]}>
            <li>
              <div className={styles["img-container"]}>
                <img src={money} alt="" />
              </div>
              <div className={styles.text}>
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
        </Media>
      </article>
    </section>
  );
};

export default Features;
