export default function CommentSection({ author, body, date }) {
  const newDate = new Date(date);
  const formatedDate = newDate.toLocaleDateString("pt-BR", {
    dateStyle: "short",
  });

  return (
    <div>
      {author.firstName}, {body}, {formatedDate}
    </div>
  );
}
