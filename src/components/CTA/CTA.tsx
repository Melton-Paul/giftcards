import styles from "./CTA.module.css";
import { useNavigate } from "react-router";
import { useContext } from "react";
import infoStore from "../../store/info-store";
const chooseIcon = require("../../images/choose_hires.png");
const exampleIcon = require("../../images/double-tick_hires.png");
const finishedIcon = require("../../images/instagram-check-mark_hires.png");

const CTA = () => {
  const navigate = useNavigate();
  const infoCtx = useContext(infoStore);

  const infoObj = infoCtx.isBusiness
    ? {
        1: "Choose your branding",
        2: "We will create and send you example mockups of your cards",
        3: "Start allowing customers to earn rewards!",
      }
    : {
        1: "Sign up for an account",
        2: "Scan the GoLoRewards code at businesses when you make a purchase",
        3: "Start earning rewards!",
      };

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="700"
      className={`${styles.CTA} container`}
    >
      <h2>How does GoLoRewards work?</h2>
      <article className={styles["box-container"]}>
        <div className={styles.box}>
          <div className={styles["img-container"]}>
            <img src={chooseIcon} alt="" />
          </div>
          <p className={styles.number}>1</p>
          <p>{infoObj[1]}</p>
        </div>
        <div className={styles.box}>
          <div className={styles["img-container"]}>
            <img src={exampleIcon} alt="" />
          </div>
          <p className={styles.number}>2</p>
          <p>{infoObj[2]}</p>
        </div>
        <div className={styles.box}>
          <div className={styles["img-container"]}>
            <img src={finishedIcon} alt="" />
          </div>
          <p className={styles.number}>3</p>
          <p>{infoObj[3]}</p>
        </div>
      </article>
      <button onClick={() => navigate("/signup")} className={styles.button}>
        Sign up now
      </button>
    </section>
  );
};

export default CTA;
