import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [toggleExpansion, setToggleExpansion] = React.useState(false);

  function toggle() {
    setToggleExpansion((prev) => !prev);
  }

  React.useEffect(() => {}, []);

  return (
    <nav className={styles.nav} onClick={toggle}>
      <div className={styles["nav-content"]}>
        <Logo />
        <i className={`fa-solid fa-bars ${styles["nav-toggle"]}`}></i>
        <div
          className={`${styles["nav-link--container"]} ${
            toggleExpansion && styles.collapsed
          }`}
        >
          <NavLink className={styles["nav-link"]} to="/">
            Home
          </NavLink>
          <NavLink className={styles["nav-link"]} to="/solutions">
            Solutions
          </NavLink>
          <NavLink className={styles["nav-link"]} to="/features">
            Features
          </NavLink>
          <NavLink className={styles["nav-link"]} to="/giftcards">
            Gift Cards
          </NavLink>
          <NavLink className={styles["nav-link"]} to="/clients">
            Clients
          </NavLink>
          <NavLink className={styles["nav-link"]} to="/pricing">
            Pricing
          </NavLink>
          <NavLink className={styles["nav-link"]} to="/contact">
            Contact Us
          </NavLink>
          <NavLink
            className={styles["nav-button"]}
            style={{ background: "#f48221" }}
            to="/signup"
          >
            Sign Up
          </NavLink>
          <NavLink
            className={styles["nav-button"]}
            style={{ background: "#1b5994" }}
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
