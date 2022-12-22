import infoStore from "../../store/info-store";
import { useContext } from "react";
import styles from "./LandingPage.module.css";
const giftcard = require("../../images/giftcard.png");
const business = require("../../images/business.png");

const LandingPage: React.FC<{
  setIsSelected: (boolean: boolean) => void;
}> = ({ setIsSelected }) => {
  const infoCtx = useContext(infoStore);

  function toggle(boolean: boolean) {
    setIsSelected(true);
    infoCtx.toggleBusiness(boolean);
  }

  return (
    <section className={`${styles.landing}`}>
      <h2 className={styles["landing-title"]}>Welcome to GoLoRewards</h2>
      <p className={styles["landing-body"]}>
        Please select what you are looking for!
      </p>
      <div className={`${styles["question-card_container"]} container`}>
        <div onClick={() => toggle(false)} className={styles["question-card"]}>
          <img src={giftcard} alt="" />
          <h3>GoLoRewards Member</h3>
          <p>
            I have joined or want to join a{" "}
            <span>GoLoRewards Rewards Program</span>
          </p>
        </div>
        <div onClick={() => toggle(true)} className={styles["question-card"]}>
          <img src={business} alt="" />
          <h3>GoLoRewards for Businesses</h3>
          <p>
            I want to setup a <span>GoLoRewards Rewards Program</span> for my
            business
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
