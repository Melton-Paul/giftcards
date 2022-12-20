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
        sitekey="6LcIWpUjAAAAAKBXvgTnRDcij4tnWKlj_Es2SI1V"
        ref={captchaRef}
        onChange={sendData}
      />
      {captchaError && <p>Captcha must be completed.</p>}
    </>
  );
};
export default Captcha;
