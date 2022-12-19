import styles from "./Privacy.module.css";

const Privacy = () => {
  return (
    <section className={`${styles.privacy} container`}>
      <h2 className={styles["privacy-title"]}>Privacy Agreement</h2>
      <p className={styles["privacy-body"]}>
        This Privacy Statement applies to the www.golorewards.com website and
        associated websites. GoLoRewards understands that you are concerned
        about your privacy. That's why GoLoRewards has created this privacy
        statement, to demonstrate our firm commitment to your privacy.
      </p>
      <ul className={styles["privacy-list"]}>
        <li>
          <h3 className={styles["privacy-list--title"]}>
            How does GoLoRewards use the information I provide?
          </h3>
          <p>
            GoLoRewards uses the information you provide to contact you or to
            send you information and announcements concerning GoLoRewards
            services and websites. GoLoRewards will not sell or give away your
            personal information to any other person, company or organisation,
            unless it is required by law, or you expressly agree to us giving
            out your information.
          </p>
        </li>
        <li>
          <h3 className={styles["privacy-list--title"]}>
            What about security?
          </h3>
          <p>
            GoLoRewards has modern and robust security measures in place to
            protect the information you give to us from loss, misuse and
            alteration. We are constantly reviewing and upgrading these security
            measures to ensure the very best of protection to you.
          </p>
        </li>
        <li>
          <h3 className={styles["privacy-list--title"]}>
            What are cookies and why does GoLoRewards use them?
          </h3>
          <p>
            A cookie is a piece of data stored on a user's computer hard drive,
            containing information about that user. A cookie can only be
            accessed across the Internet by the website that placed it there.
            Cookies are used by the GoLoRewards website to add functionality and
            security. You may choose to reject a cookie that the GoLoRewards
            website attempts to place on your computer, however you may then be
            limited in your use of some areas of the website. The use of cookies
            in this way is wide-spread and commonly accepted by the Internet
            community.
          </p>
        </li>
        <li>
          <h3 className={styles["privacy-list--title"]}>
            What about other websites?
          </h3>
          <p>
            The GoLoRewards website contains links to other websites. We are not
            responsible for the privacy practices of these other websites. We
            encourage you to be aware when you leave our website and to read the
            privacy statements of other websites that you use. This privacy
            statement applies only to this website.
          </p>
        </li>
        <li>
          <h3 className={styles["privacy-list--title"]}>
            What is "spam" and does GoLoRewards send it?
          </h3>
          <p>
            The widely accepted definition of "spam" is unsolicited commercial
            email, or in other words, email of a commercial nature that the
            recipient does not want. GoLoRewards does not send "spam".
          </p>
        </li>
        <li>
          <h3 className={styles["privacy-list--title"]}>
            How can I stop GoLoRewards from sending me email?
          </h3>
          <p>
            Each email we send to you contains a link at the very bottom
            allowing you to unsubscribe. If you have received unwanted email
            sent from GoLoRewards, or purporting to be sent from GoLoRewards,
            please contact GoLoRewards. If you have any questions about the
            privacy practices of GoLoRewards or your dealings with GoLoRewards,
            please contact GoLoRewards. We are committed to being of service to
            you and resolving any issues that may arise.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Privacy;
