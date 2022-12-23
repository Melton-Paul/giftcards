import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Logo from "../Logo/Logo";
import infoStore from "../../store/info-store";

  const infoCtx = useContext(infoStore);

  return (
    <footer className={styles.footer}>
      <div className={`${styles["footer-content"]} container`}>
        <ul className={styles["footer-list"]}>
          {infoCtx.isBusiness && (
            <li>
              <h2 className={styles["footer-subtitle"]}>Learn More</h2>
              <ul className={styles["footer-list-item_list"]}>
                <li>
                  <Link to="/solutions">Solutions</Link>
                </li>
                <li>
                  <Link to="/features">Features</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
              </ul>
            </li>
          )}
          <li>
            <h2 className={styles["footer-subtitle"]}>Support</h2>
            <ul className={styles["footer-list-item_list"]}>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/client">Client Agreement</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Statement</Link>
              </li>
              {/* <li>
                <Link to="/status">System Status</Link>
              </li> */}
            </ul>
          </li>
          <li>
            <h2 className={styles["footer-subtitle"]}>Account</h2>
            <ul className={styles["footer-list-item_list"]}>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </li>
          <li>
            <h2 className={styles["footer-subtitle"]}>Company</h2>
            <ul className={styles["footer-list-item_list"]}>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className={styles["footer-copyright"]}>
          <Logo />
          <p>Copyright &#169; 2022 GoLoRewards </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
