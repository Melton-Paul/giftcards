import styles from "./SignupForm.module.css";
import UseInput from "../../hooks/use-inputs";

const SignupForm = () => {
  const {
    value: businessName,
    isError: businessHasError,
    handleChange: businessChange,
    isValid: businessIsValid,
    handleBlur: businessBlur,
    reset: businessReset,
  } = UseInput((value: string) => value.length > 0);
  const {
    value: addressName,
    isError: addressHasError,
    handleChange: addressChange,
    isValid: addressIsValid,
    handleBlur: addressBlur,
    reset: addressReset,
  } = UseInput((value: string) => value.length > 0);
  const {
    value: cityName,
    isError: cityHasError,
    handleChange: cityChange,
    isValid: cityIsValid,
    handleBlur: cityBlur,
    reset: cityReset,
  } = UseInput((value: string) => value.length > 0);
  const {
    value: stateName,
    isError: stateHasError,
    handleChange: stateChange,
    isValid: stateIsValid,
    handleBlur: stateBlur,
    reset: stateReset,
  } = UseInput((value: string) => value.length > 0);
  const {
    value: zipName,
    isError: zipHasError,
    handleChange: zipChange,
    isValid: zipIsValid,
    handleBlur: zipBlur,
    reset: zipReset,
  } = UseInput((value: string) => value.length > 0);

  const formHasErrors =
    !zipIsValid &&
    !stateIsValid &&
    !cityIsValid &&
    !businessIsValid &&
    !addressIsValid;

  function handleSubmit(e: any) {
    e.preventDefault();
    if (formHasErrors) {
      businessBlur();
      addressBlur();
      cityBlur();
      zipBlur();
      stateBlur();
      return;
    }
    businessReset();
    zipReset();
    stateReset();
    addressReset();
    cityReset();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.signupform}>
      <div className={styles["input-container"]}>
        <label
          htmlFor="businessName"
          className={`${styles["input-label"]} ${
            businessHasError && styles.error
          }`}
        >
          Business Name
        </label>
        <input
          value={businessName}
          onChange={businessChange}
          onBlur={businessBlur}
          id="businessName"
          className={`${styles.input} ${businessHasError && styles.error}`}
        />
      </div>
      <div className={styles["input-container"]}>
        <label
          htmlFor="addressName"
          className={`${styles["input-label"]} ${
            addressHasError && styles.error
          }`}
        >
          Address
        </label>
        <input
          value={addressName}
          onChange={addressChange}
          onBlur={addressBlur}
          id="addressName"
          className={`${styles.input} ${addressHasError && styles.error}`}
        />
      </div>
      <div className={styles["input-container"]}>
        <label
          htmlFor="cityName"
          className={`${styles["input-label"]} ${cityHasError && styles.error}`}
        >
          City
        </label>
        <input
          value={cityName}
          onChange={cityChange}
          onBlur={cityBlur}
          id="cityName"
          className={`${styles.input} ${cityHasError && styles.error}`}
        />
      </div>
      <div className={styles["input-container"]}>
        <label
          htmlFor="stateName"
          className={`${styles["input-label"]} ${
            stateHasError && styles.error
          }`}
        >
          State
        </label>
        <input
          value={stateName}
          onChange={stateChange}
          onBlur={stateBlur}
          id="stateName"
          className={`${styles.input} ${stateHasError && styles.error}`}
        />
      </div>
      <div className={styles["input-container"]}>
        <label
          htmlFor="zipName"
          className={`${styles["input-label"]} ${zipHasError && styles.error}`}
        >
          Zip/Postal Code
        </label>
        <input
          value={zipName}
          onChange={zipChange}
          onBlur={zipBlur}
          id="zipName"
          className={`${styles.input} ${zipHasError && styles.error}`}
        />
      </div>

      <button>Submit</button>
    </form>
  );
};

export default SignupForm;
