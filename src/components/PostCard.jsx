import styles from "./PostCard.module.css";

export default function PostCard({ title, body, date, author }) {
  const newDate = new Date(date);
  const formatedDate = newDate.toLocaleDateString("pt-BR", {
    dateStyle: "short",
  });
  return (
    <div className={styles.postCard}>
      <div className={styles.postCardContent}>
        <div className={styles.title}>
          <h1>{title}</h1>
        </div>
        <div className={styles.body}>
          <p>{body}</p>
        </div>
        <div className={styles.infos}>
          <p>{formatedDate}</p>
          <p>{author}</p>
        </div>
      </div>
    </div>
  );
}
