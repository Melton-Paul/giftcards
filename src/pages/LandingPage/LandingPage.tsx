import infoStore from "../../store/info-store";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Card from "../../components/UI/Cards/Card";
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

      <div className={styles["question-card_container"]}>
        <Card
          title="GoLoRewards Member"
          body="I have joined or want to join a GoLoRewards Rewards Program"
          img={giftcard}
          handleClick={() => toggle(false)}
        />
        <Card
          title="GoLoRewards for Businesses"
          body="I want to setup a GoLoRewards Rewards Program for my business"
          img={business}
          handleClick={() => toggle(true)}
        />
      </div>
      <Link target="_blank" className={styles.privacy} to="/privacy">
        Privacy Agreement
      </Link>
    </section>
  );
};

export default LandingPage;
