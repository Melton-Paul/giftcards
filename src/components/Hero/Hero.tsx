import styles from "./Hero.module.css";
import React, { useContext } from "react";
import Media from "../UI/Media/Media";
import { useNavigate } from "react-router";
import infoStore from "../../store/info-store";
const phone = require("../../images/temphone.png");

let show = true;

const Hero = () => {
  const navigate = useNavigate();
  const infoCtx = useContext(infoStore);
  const [showBanner, setShowBanner] = React.useState(show ? true : false);

  const infoObj = infoCtx.isBusiness
    ? {
        title: "GoLoRewards: Fast Gift Cards for Businesses",
        cta: "Send your customers or employees a giftcard for your business.",
        list1: "Fast, convenient option for your branding",
        list2: "Easy maintenance",
        list3: "Rewards programs tied together",
        banner1: "Free Branding",
        banner2: "Refillable",
        banner3: "Rewards Program",
        banner4: "Easy Maintenance",
      }
    : {
        title: "GoLoRewards: Start Earning Rewards Points!",
        cta: "Get rewards for every purchase you make at a business that is signed up with GoLoRewards",
        list1: "Doesn't cost a dime extra",
        list2: "Easy to use at your favorite businesses",
        list3: "Rewards programs tied together",
        banner1: "Free Rewards",
        banner2: "Refillable",
        banner3: "Rewards Program",
        banner4: "Easy to use",
      };

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
        <div
          data-aos="slide-right"
          data-aos-duration="1200"
          className={`${styles.banner} ${styles["banner-top"]}`}
        >
          <p
            onClick={() => navigate("/card")}
            className={styles["banner-link"]}
          >
            Have you received a gift card or rewards card and are looking for
            information on it? Click here!
          </p>
          <p onClick={closeBanner} className={styles["banner-close"]}>
            Close{" "}
          </p>
        </div>
      )}
      <div data-aos="flip-left" data-aos-duration="1200">
        <Media img={phone}>
          <div className={styles["hero-content"]}>
            <h1>{infoObj.title}</h1>
            <p>{infoObj.cta}</p>
            <ul>
              <li>{infoObj.list1}</li>
              <li>{infoObj.list2}</li>
              <li>{infoObj.list3}</li>
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
        <p>
          {infoObj.banner1} | {infoObj.banner2} | {infoObj.banner3} |{" "}
          {infoObj.banner4}{" "}
        </p>
      </div>
    </section>
  );
};

export default Hero;
