import styles from "./CTA.module.css";
import { useNavigate } from "react-router";
const chooseIcon = require("../../images/choose_hires.png");
const exampleIcon = require("../../images/double-tick_hires.png");
const finishedIcon = require("../../images/instagram-check-mark_hires.png");

const CTA = () => {
  const navigate = useNavigate();

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
          <p>Choose your branding</p>
        </div>
        <div className={styles.box}>
          <div className={styles["img-container"]}>
            <img src={exampleIcon} alt="" />
          </div>
          <p className={styles.number}>2</p>
          <p>We will create and send you example mockups of your cards</p>
        </div>
        <div className={styles.box}>
          <div className={styles["img-container"]}>
            <img src={finishedIcon} alt="" />
          </div>
          <p className={styles.number}>3</p>
          <p>Start allowing your customers to earn rewards!</p>
        </div>
      </article>
      <button onClick={() => navigate("/signup")} className={styles.button}>
        Sign up now
      </button>
    </section>
  );
};

export default CTA;
