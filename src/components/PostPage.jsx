import styles from "./PostPage.module.css";

export default function PostPage({ title, body, date, author }) {
  const newDate = new Date(date);
  const formatedDate = newDate.toLocaleDateString("pt-BR", {
    dateStyle: "short",
  });

  return (
    <div className={styles.postContent}>
      <div className={styles.infos}>
        <p>{formatedDate}</p>
        <p>
          <span>by </span>
          {author.firstName}
        </p>
      </div>
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </div>
  );
}
