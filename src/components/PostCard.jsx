export default function PostCard({ title, body, date }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
      <p>{date}</p>
    </>
  );
}
