import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import React from "react";

const Captcha = (props) => {
  const [captchaError, setCaptchaError] = React.useState(false);
  const captchaRef = useRef(null);

  function sendData() {
    if (captchaRef.current?.getValue()) {
      props.checkCaptcha(true);
      setCaptchaError(false);
    } else {
      props.checkCaptcha(false);
      setCaptchaError(true);
    }
  }

  React.useEffect(() => {
    if (!props.submitted) {
      setCaptchaError(false);
      return;
    }
    if (!captchaRef.current?.getValue()) {
      setCaptchaError(true);
    }
  }, [props.submitted]);

  return (
    <>
      <ReCAPTCHA
        sitekey="6LerZJUjAAAAAF2DPG3TuI2j7wbRZmkKkf1jzi-b"
        ref={captchaRef}
        onChange={sendData}
      />
      {captchaError && <p>Captcha must be completed.</p>}
    </>
  );
};
export default Captcha;
