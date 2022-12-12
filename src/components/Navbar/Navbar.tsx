import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [toggleExpansion, setToggleExpansion] = React.useState(true);

  function toggle() {
    setToggleExpansion((prev) => !prev);
  }

  function checkActive({ isActive }: any) {
    return {
      color: isActive ? "green" : "initial",
    };
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
          <NavLink to="/" style={checkActive} className={styles["nav-link"]}>
            Home
          </NavLink>
          <NavLink
            style={checkActive}
            className={styles["nav-link"]}
            to="/solutions"
          >
            Solutions
          </NavLink>
          <NavLink
            style={checkActive}
            className={styles["nav-link"]}
            to="/features"
          >
            Features
          </NavLink>
          <NavLink
            style={checkActive}
            className={styles["nav-link"]}
            to="/giftcards"
          >
            Gift Cards
          </NavLink>
          <NavLink
            style={checkActive}
            className={styles["nav-link"]}
            to="/clients"
          >
            Clients
          </NavLink>
          <NavLink
            style={checkActive}
            className={styles["nav-link"]}
            to="/pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            style={checkActive}
            className={styles["nav-link"]}
            to="/contact"
          >
            Contact Us
          </NavLink>
          <NavLink
            className={styles["nav-button"]}
            style={{ background: "#90b44e" }}
            to="/signup"
          >
            Sign Up
          </NavLink>
          <NavLink
            className={styles["nav-button"]}
            style={{ background: "#049947" }}
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
