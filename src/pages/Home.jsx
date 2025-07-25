import { useEffect, useState } from "react";
import api from "../api/api";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const response = await api.get("/posts");
      if (!response) {
        throw new Error("HTTP error! status:" + response.status);
      }
      const data = response.data.posts;
      console.log(data);
      setPosts(data);
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
