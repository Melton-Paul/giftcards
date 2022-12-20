import styles from "./Signup.module.css";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <section
      data-aos="slide-left"
      data-aos-duration="1000"
      className={styles.signup}
    >
      <h2>Sign Up: Lets Get Some Details</h2>
      <SignupForm />
    </section>
  );
};

export default Signup;
