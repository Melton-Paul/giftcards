import styles from "./ScrollTop.module.css";

const ScrollTop = () => {
  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <button
      data-aos="slide-left"
      data-aos-duration="1200"
      className={styles["scroll-btn"]}
      onClick={handleClick}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};
export default ScrollTop;
