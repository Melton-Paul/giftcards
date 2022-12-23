import styles from "./Questions.module.css";
import { useNavigate } from "react-router";
import infoStore from "../../store/info-store";
import { useContext } from "react";
import Card from "../UI/Cards/Card";
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
        <Card
          img={business}
          title={infoObj.option1Title}
          body={infoObj.option1Body}
          handleClick={() =>
            navigate(infoCtx.isBusiness ? "/contact-sales" : "contact-support")
          }
        />
        <Card
          img={support}
          title="Gift Card Recipient Support"
          body="I have received a gift card and need assistance using it."
          handleClick={() => navigate("/contact-support")}
        />
      </div>
    </section>
  );
};

export default Questions;
