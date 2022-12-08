import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <span className="orange">Go</span>
      <span className="blue">Lo</span>
      <span className="dark">Rewards</span>
    </div>
  );
};

export default Logo;
