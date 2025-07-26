export default function CommentSection({ author, body, date }) {
  return (
    <div>
      {author.firstName}, {body}, {date}
    </div>
  );
}
