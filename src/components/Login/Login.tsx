import styles from "./Login.module.css";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <section
      data-aos="slide-left"
      data-aos-duration="1000"
      className={styles.login}
    >
      <article className={styles["login-modal"]}>
        <h2>Business Sign In</h2>
        <LoginForm />
      </article>
      <article className={styles["signup-modal"]}>
        <h2>Apply for a Business Account</h2>
        <p>
          A fast and cost-effective way to promote your brand and offer rewards
          to your customers
        </p>
        <button
          onClick={() => navigate("/signup")}
          className={styles["signup-modal__button"]}
        >
          Create Account
        </button>
      </article>
    </section>
  );
};

export default Login;
