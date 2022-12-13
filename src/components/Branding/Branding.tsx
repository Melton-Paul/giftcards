import styles from "./Branding.module.css";
import Media from "../UI/Media/Media";
const logoHere = require("../../images/logohere.jpg");

const Branding = () => {
  return (
    <section className={styles.branding}>
      <Media img={logoHere}>
        <div className={styles["branding-content"]}>
          <h2>FREE Custom Branding</h2>
          <p>
            FREE CUSTOM BRANDING* - Add your company logo to your gift cards!
            Contact us, or sign up now to get started.
          </p>
          <p>
            *One free custom brand setup per account. Minimum gift card spend
            applies - contact us for details.
          </p>
        </div>
      </Media>
    </section>
  );
};

export default Branding;
