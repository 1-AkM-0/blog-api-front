import { useEffect, useState } from "react";
import api from "../api/api";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await api.get("/posts");
        const data = response.data.posts;
        console.log(data);
        setPosts(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    getPosts();
  }, []);

  return (
    <>
      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            date={post.createdAt}
          />
        );
      })}
    </>
  );
}
