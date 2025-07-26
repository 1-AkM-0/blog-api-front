import { useParams } from "react-router-dom";
import api from "../api/api";
import { useEffect, useState } from "react";
import PostPage from "../components/PostPage";
import CommentSection from "../components/CommentSection";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await api.get(`/posts/${id}`);
        const data = response.data.post;
        const cm = data.comments;
        console.log(data);
        setPost(data);
        setComments(cm);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getPost();
  }, []);

  return (
    <div className="post-content">
      {!post ? (
        <div>Loading...</div>
      ) : (
        <PostPage
          title={post.title}
          body={post.body}
          author={post.author}
          date={post.updatedAt}
        />
      )}
      {comments ? (
        <h1>
          {comments.map((comment) => (
            <section key={comment.id} className="comments-section">
              <CommentSection
                author={comment.author}
                body={comment.body}
                date={comment.updatedAt}
              />
            </section>
          ))}
        </h1>
      ) : (
        <div>Loading comments...</div>
      )}
    </div>
  );
}
