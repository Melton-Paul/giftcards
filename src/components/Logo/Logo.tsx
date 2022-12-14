import styles from "./Logo.module.css";
import { useNavigate } from "react-router";

const Logo = () => {
  const navigate = useNavigate();

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
    </div>
  );
};

export default Logo;
