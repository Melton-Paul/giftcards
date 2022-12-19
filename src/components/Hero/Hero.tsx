import styles from "./Hero.module.css";
import React from "react";
import Media from "../UI/Media/Media";
import { useNavigate } from "react-router";
const phone = require("../../images/temphone.png");

let show = true;

const Hero = () => {
  const navigate = useNavigate();
  const [showBanner, setShowBanner] = React.useState(show ? true : false);

  function closeBanner() {
    show = false;
    setShowBanner(false);
  }

  const style = {
    paddingTop: showBanner ? "12rem" : "5rem",
  };

  return (
    <section className={styles.hero} style={style}>
      {showBanner && (
        <div className={`${styles.banner} ${styles["banner-top"]}`}>
          <a href="https://golorewards.com" className={styles["banner-link"]}>
            Have you received a gift card or rewards card and are looking for
            information on it? Click here!
          </a>
          <p onClick={closeBanner} className={styles["banner-close"]}>
            Close{" "}
          </p>
        </div>
      )}
      <div data-aos="flip-left" data-aos-duration="1200">
        <Media img={phone}>
          <div className={styles["hero-content"]}>
            <h1>GoLoRewards: Fast Gift Cards for Businesses</h1>
            <p>
              Send your customers or employees a giftcard for your business.{" "}
            </p>
            <ul>
              <li>Fast, convenient option for your branding</li>
              <li>Easy maintenance</li>
              <li>Rewards programs tied together</li>
            </ul>
            <button
              onClick={() => navigate("/signup")}
              className={styles["hero-button"]}
            >
              Get Started Now
              <br /> <span>It takes less than 60 seconds!</span>
            </button>
          </div>
        </Media>
      </div>
      <div className={`${styles.banner} ${styles["banner-bottom"]}`}>
        <p>Free Branding | Refillable | Rewards program | Easy Maintenance </p>
      </div>
    </section>
  );
};

/* <section className={styles.hero}>
<div className={`${styles["hero-grid"]} container`}>
  <div className={styles["hero-content"]}>
    <h1>GoLoRewards: Fast Gift Cards for Businesses</h1>
    <p>Send your customers or employees a giftcard for your business. </p>
    <ul>
      <li>Fast, convenient option for your branding</li>
      <li>Easy maintenance</li>
      <li>Rewards programs tied together</li>
    </ul>
    <button className={styles["hero-button"]}>
      Get Started Now
      <br /> <span>It takes less than 60 seconds!</span>
    </button>
  </div>
  <div className={styles["hero-img__container"]}>
    <img src={phone} alt="Phone" className={styles["hero-img"]} />
  </div>
</div>
<div className={styles.banner}>
  <p>Free Branding | Refillable | Rewards program | Easy Maintenance </p>
</div>
</section> */

export default Hero;
