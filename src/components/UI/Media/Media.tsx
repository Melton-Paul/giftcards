import styles from "./Media.module.css";

const Media: React.FC<{
  className?: string;
  children: React.ReactNode;
  img: string;
}> = ({ children, img, className }) => {
  return (
    <section className={`${styles.media} ${className} container`}>
      <article className={styles["media-content"]}>{children}</article>
      <article className={styles["media-img__container"]}>
        <img src={img} alt="" className={styles["media-img"]} />
      </article>
    </section>
  );
};

export default Media;
