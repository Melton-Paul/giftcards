import styles from "./LoginForm.module.css";
import React from "react";

const LoginForm = () => {
  const [userData, setUserData] = React.useState({
    user: "",
    pass: "",
    continueSignIn: false,
  });

  function handleChange(e: any) {
    e.preventDefault();
    const { value, name, checked } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: e.target.type === "checkbox" ? checked : value,
    }));
  }

  return (
    <form>
      <div className={styles["input-container"]}>
        <label className={styles.label} htmlFor="username">
          Username
        </label>
        <input
          className={styles.input}
          type="text"
          id="username"
          name="user"
          value={userData.user}
          onChange={handleChange}
        />
      </div>
      <div className={styles["input-container"]}>
        <label className={styles.label} htmlFor="pass">
          Password
        </label>
        <input
          className={styles.input}
          type="text"
          id="pass"
          name="pass"
          value={userData.pass}
          onChange={handleChange}
        />
      </div>
      <div className={`${styles["input-container"]} ${styles.check}`}>
        <input
          className={styles.input}
          type="checkbox"
          id="continueSignIn"
          name="continueSignIn"
          checked={userData.continueSignIn}
          onChange={handleChange}
        />
        <label className={styles.label} htmlFor="continueSignIn">
          Keep me signed in
        </label>
      </div>
      <button className={styles["login-button"]}>Sign In</button>
    </form>
  );
};

export default LoginForm;
