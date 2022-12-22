import styles from "./Questions.module.css";
import { useNavigate } from "react-router";
import infoStore from "../../store/info-store";
import { useContext } from "react";
const business = require("../../images/2.png");
const support = require("../../images/14.png");

const Questions = () => {
  const navigate = useNavigate();
  const infoCtx = useContext(infoStore);

  const infoObj = infoCtx.isBusiness
    ? {
        body: "Questions? We'd love to help get your business's gift card program up and running.",
        option1Title: "Business Sales Enquiry",
        option1Body:
          "I wish to enquire about purchasing gift cards for my business.",
      }
    : {
        body: "Questions? We'd love to help get you setup with joining a rewards program!",
        option1Title: "Sign Up Support",
        option1Body: "I need help creating an account.",
      };
  return (
    <section className={styles.questions}>
      <h2>Talk to us</h2>
      <p className={styles["questions-body"]}>
        {infoObj.body} <br /> You can reach out to our team using the forms
        below.
      </p>
      <p className={styles["secondary-title"]}>How can we help you?</p>
      <div className={styles["question-card_container"]}>
        <div
          className={styles["question-card"]}
          onClick={() => navigate("/contact-sales")}
        >
          <img src={business} alt="" />
          <h3>{infoObj.option1Title}</h3>
          <p>{infoObj.option1Body}</p>
        </div>
        <div
          onClick={() => navigate("/contact-support")}
          className={styles["question-card"]}
        >
          <img src={support} alt="" />
          <h3>Gift Card Recipient Support</h3>
          <p>
            I have <span>received a gift card</span> and need assistance using
            it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Questions;
