import styles from "./Card.module.css";

const Card: React.FC<{
  img: string;
  title: string;
  body: string;
  handleClick: () => void;
}> = ({ img, title, body, handleClick }) => {
  return (
    <article className={styles["question-card"]} onClick={handleClick}>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{body}</p>
    </article>
  );
};

export default Card;
