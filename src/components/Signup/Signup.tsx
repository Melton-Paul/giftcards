import styles from "./Signup.module.css";
import SignupForm from "./SignupForm";

const Signup = () => {
  return (
    <section className={styles.signup}>
      <h2>Sign Up: Lets Get Some Details</h2>
      <SignupForm />
    </section>
  );
};

export default Signup;
