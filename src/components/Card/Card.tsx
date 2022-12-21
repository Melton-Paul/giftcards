import styles from "./Card.module.css";
import React from "react";
import { useSearchParams } from "react-router-dom";
const defaultCard = require("../../images/defaultcard.png");

const Card = () => {
  const [search] = useSearchParams();
  const [inputVal, setInputVal] = React.useState("");
  const num = search.get("num");

  function handleChange(e: any) {
    setInputVal(e.target.value);
  }
  React.useEffect(() => {
    if (num) {
      setInputVal(num);
    }
  }, [num]);

  return (
    <section className={`${styles["card-container"]} container`}>
      <article className={styles.card}>
        <div className={styles["card-input"]}>
          <p className={styles["card-input--title"]}>
            Please Enter your card number
          </p>
          <div className={styles["input-container"]}>
            <input
              type="text"
              value={inputVal}
              onChange={handleChange}
              placeholder="Card Number"
            />
            <button>Lookup!</button>
          </div>
        </div>
        <img
          className={styles["card-img"]}
          src={defaultCard}
          alt="Company Card"
        />
      </article>
    </section>
  );
};

export default Card;
