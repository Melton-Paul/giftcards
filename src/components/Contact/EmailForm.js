import { useForm, ValidationError } from "@formspree/react";
import styles from "./EmailForm.module.css";
import Button from "../UI/Button/Button";
import React from "react";

import Captcha from "./ContactSales/Captcha";

export default function EmailForm() {
  const [showConfirmation, setShowConfirmation] = React.useState(false);
  const [state, handleSubmit] = useForm("xbjerrdj");
  const [submitted, setSubmitted] = React.useState(false);

  const [captchaPassed, setCaptchaPassed] = React.useState(false);

  function submitHandler(e) {
    e.preventDefault();
    setSubmitted(true);
    if (!captchaPassed) {
      return;
    }
    handleSubmit(e);
  }

  function checkCaptcha(value) {
    setCaptchaPassed(value);
  }

  const languageObj = {
    name: "Name",
    message: "Message",
    submit: "Submit",
    h3: "Your Email Was Sent!",
    confirm: "Thank you for contacting us, we will be in touch shortly!",
  };

  const { name, message, submit, h3, confirm } = languageObj;

  React.useEffect(() => {
    if (!state.succeeded) {
      return;
    }
    setShowConfirmation(true);
    const timer = setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [state.succeeded]);

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      {showConfirmation ? (
        <div className={styles["form-success__container"]}>
          <h3>{h3}</h3>
          <p>{confirm}</p>
        </div>
      ) : (
        <>
          <div className={styles["input--section"]}>
            <label htmlFor="name">{name}:</label>
            <input id="name" type="text" name="name" maxLength={40} />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className={styles["input--section"]}>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" maxLength={70} />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className={styles["input--section"]}>
            <label htmlFor="phone">Telephone:</label>
            <input id="phone" type="number" name="phone" maxLength={40} />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </div>

          <div className={styles["input--section"]}>
            <label htmlFor="message">{message}:</label>
            <textarea
              rows={15}
              className={styles.textarea}
              id="message"
              name="message"
              maxLength={1000}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className={styles.captcha}>
            <Captcha checkCaptcha={checkCaptcha} submitted={submitted} />
          </div>

          <Button className={styles.button} disabled={state.submitting}>
            {submit}
          </Button>
        </>
      )}
    </form>
  );
}
