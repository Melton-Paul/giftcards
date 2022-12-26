import styles from "./Logo.module.css";
import React from "react";
import { useNavigate } from "react-router";
import infoStore from "../../store/info-store";

const Logo = () => {
  const navigate = useNavigate();
  const infoCtx = React.useContext(infoStore);

  return (
    <div
      className={styles.logo}
      onClick={() => {
        navigate("/");
        window.scrollTo(0, 0);
      }}
    >
      <span className="orange">Go</span>
      <span className="blue">Lo</span>
      <span className="dark">Rewards</span>
      {infoCtx.isBusiness && (
        <p className={styles["logo-business"]}>Business</p>
      )}
    </div>
  );
};

export default Logo;
