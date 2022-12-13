import styles from "./Media.module.css";

const Media: React.FC<{ children: React.ReactNode; img: string }> = ({
  children,
  img,
}) => {
  return (
    <section className={`${styles.media} container`}>
      <article className={styles["media-content"]}>{children}</article>
      <article className={styles["media-img__container"]}>
        <img src={img} alt="" className={styles["media-img"]} />
      </article>
    </section>
  );
};

export default Media;
