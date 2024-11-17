import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch posts:", error);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.content.slice(0, 100)}...</p>
          <p>Author: {post.author}</p>
          <p>Tags: {post.tags}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
