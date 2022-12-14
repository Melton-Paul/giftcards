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
  } = UseInput((value: string) => value.length > 0 && value.length < 70);
  const {
    value: addressName,
    isError: addressHasError,
    handleChange: addressChange,
    isValid: addressIsValid,
    handleBlur: addressBlur,
    reset: addressReset,
  } = UseInput((value: string) => value.length > 0 && value.length < 50);
  const {
    value: cityName,
    isError: cityHasError,
    handleChange: cityChange,
    isValid: cityIsValid,
    handleBlur: cityBlur,
    reset: cityReset,
  } = UseInput((value: string) => value.length > 0 && value.length < 50);
  const {
    value: stateName,
    isError: stateHasError,
    handleChange: stateChange,
    isValid: stateIsValid,
    handleBlur: stateBlur,
    reset: stateReset,
  } = UseInput((value: string) => value.length > 0 && value.length < 25);
  const {
    value: zipName,
    isError: zipHasError,
    handleChange: zipChange,
    isValid: zipIsValid,
    handleBlur: zipBlur,
    reset: zipReset,
  } = UseInput((value: string) => value.length > 0 && value.length < 25);
  const {
    value: personalName,
    isError: personalHasError,
    handleChange: personalChange,
    isValid: personalIsValid,
    handleBlur: personalBlur,
    reset: personalReset,
  } = UseInput((value: string) => value.length > 0 && value.length < 40);
  const {
    value: businessEmailName,
    isError: businessEmailHasError,
    handleChange: businessEmailChange,
    isValid: businessEmailIsValid,
    handleBlur: businessEmailBlur,
    reset: businessEmailReset,
  } = UseInput(
    (value: string) =>
      value.length > 0 && value.length < 70 && value.includes("@")
  );
  const {
    value: businessPhoneName,
    isError: businessPhoneHasError,
    handleChange: businessPhoneChange,
    isValid: businessPhoneIsValid,
    handleBlur: businessPhoneBlur,
    reset: businessPhoneReset,
  } = UseInput((value: string) => value.length > 0 && value.length < 40);
  const {
    value: personalPhoneName,
    isError: personalPhoneHasError,
    handleChange: personalPhoneChange,
    isValid: personalPhoneIsValid,
    handleBlur: personalPhoneBlur,
    reset: personalPhoneReset,
  } = UseInput((value: string) => value.length > 0 && value.length < 40);
  const {
    value: userName,
    isError: userHasError,
    handleChange: userChange,
    isValid: userIsValid,
    handleBlur: userBlur,
    reset: userReset,
  } = UseInput((value: string) => value.length > 0 && value.length < 30);
  const {
    value: passName,
    isError: passHasError,
    handleChange: passChange,
    isValid: passIsValid,
    handleBlur: passBlur,
    reset: passReset,
  } = UseInput((value: string) => value.length > 0 && value.length < 30);

  const formHasErrors =
    !zipIsValid &&
    !stateIsValid &&
    !cityIsValid &&
    !businessIsValid &&
    !addressIsValid &&
    !personalIsValid &&
    !businessEmailIsValid &&
    !businessPhoneIsValid &&
    !personalPhoneIsValid &&
    !userIsValid &&
    !passIsValid;

  const anyErrors =
    businessEmailHasError ||
    businessPhoneHasError ||
    businessHasError ||
    addressHasError ||
    cityHasError ||
    stateHasError ||
    zipHasError ||
    personalHasError ||
    personalPhoneHasError ||
    businessPhoneHasError ||
    userHasError ||
    passHasError;

  function handleSubmit(e: any) {
    e.preventDefault();
    if (formHasErrors) {
      businessBlur();
      addressBlur();
      cityBlur();
      zipBlur();
      stateBlur();
      passBlur();
      userBlur();
      businessPhoneBlur();
      personalPhoneBlur();
      businessEmailBlur();
      personalBlur();
      return;
    }
    passReset();
    userReset();
    personalPhoneReset();
    businessPhoneReset();
    businessEmailReset();
    personalReset();
    businessReset();
    zipReset();
    stateReset();
    addressReset();
    cityReset();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.signupform}>
      {anyErrors && (
        <div className={styles["error-bar"]}>
          <p>Fix Errors below to continue!</p>
        </div>
      )}
      <article>
        <h3 className={styles["section-title"]}>Business Details</h3>
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
            type="text"
            value={businessName}
            onChange={businessChange}
            onBlur={businessBlur}
            id="businessName"
            maxLength={40}
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
            type="text"
            value={addressName}
            onChange={addressChange}
            maxLength={70}
            onBlur={addressBlur}
            id="addressName"
            className={`${styles.input} ${addressHasError && styles.error}`}
          />
        </div>
        <div className={styles["input-container"]}>
          <label
            htmlFor="cityName"
            className={`${styles["input-label"]} ${
              cityHasError && styles.error
            }`}
          >
            City
          </label>
          <input
            type="text"
            value={cityName}
            maxLength={50}
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
            type="text"
            maxLength={25}
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
            className={`${styles["input-label"]} ${
              zipHasError && styles.error
            }`}
          >
            Zip/Postal Code
          </label>
          <input
            maxLength={20}
            min={1}
            max={120000}
            type="number"
            value={zipName}
            onChange={zipChange}
            onBlur={zipBlur}
            id="zipName"
            className={`${styles.input} ${zipHasError && styles.error}`}
          />
        </div>
      </article>
      <article>
        <h3 className={styles["section-title"]}>Your Contact Details</h3>
        <div className={styles["input-container"]}>
          <label
            htmlFor="personalName"
            className={`${styles["input-label"]} ${
              personalHasError && styles.error
            }`}
          >
            Name
          </label>
          <input
            maxLength={50}
            type="text"
            value={personalName}
            onChange={personalChange}
            onBlur={personalBlur}
            id="personalName"
            className={`${styles.input} ${personalHasError && styles.error}`}
          />
        </div>
        <div className={styles["input-container"]}>
          <label
            htmlFor="businessEmailName"
            className={`${styles["input-label"]} ${
              businessEmailHasError && styles.error
            }`}
          >
            Business Email Address
          </label>
          <input
            maxLength={70}
            type="email"
            value={businessEmailName}
            onChange={businessEmailChange}
            onBlur={businessEmailBlur}
            id="businessEmailName"
            className={`${styles.input} ${
              businessEmailHasError && styles.error
            }`}
          />
        </div>
        <div className={styles["input-container"]}>
          <label
            htmlFor="businessPhoneName"
            className={`${styles["input-label"]} ${
              businessPhoneHasError && styles.error
            }`}
          >
            Business Phone Number
          </label>
          <input
            maxLength={50}
            type="number"
            value={businessPhoneName}
            onChange={businessPhoneChange}
            onBlur={businessPhoneBlur}
            id="businessPhoneName"
            className={`${styles.input} ${
              businessPhoneHasError && styles.error
            }`}
          />
        </div>
        <div className={styles["input-container"]}>
          <label
            htmlFor="personalPhoneName"
            className={`${styles["input-label"]} ${
              personalPhoneHasError && styles.error
            }`}
          >
            Mobile/Cell Number
          </label>
          <input
            maxLength={50}
            type="number"
            value={personalPhoneName}
            onChange={personalPhoneChange}
            onBlur={personalPhoneBlur}
            id="personalPhoneName"
            className={`${styles.input} ${
              personalPhoneHasError && styles.error
            }`}
          />
        </div>
      </article>
      <article>
        <h3 className={styles["section-title"]}>Login Details</h3>
        <div className={styles["input-container"]}>
          <label
            htmlFor="userName"
            className={`${styles["input-label"]} ${
              userHasError && styles.error
            }`}
          >
            Username
          </label>
          <input
            maxLength={40}
            type="text"
            value={userName}
            onChange={userChange}
            onBlur={userBlur}
            id="userName"
            className={`${styles.input} ${userHasError && styles.error}`}
          />
        </div>
        <div className={styles["input-container"]}>
          <label
            htmlFor="passName"
            className={`${styles["input-label"]} ${
              passHasError && styles.error
            }`}
          >
            Password
          </label>
          <input
            maxLength={40}
            minLength={6}
            type="password"
            value={passName}
            onChange={passChange}
            onBlur={passBlur}
            id="passName"
            className={`${styles.input} ${passHasError && styles.error}`}
          />
        </div>
      </article>

      <button className={styles["submit-button"]}>Continue &#8594;</button>
    </form>
  );
};

export default SignupForm;
