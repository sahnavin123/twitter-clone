import React, { useContext, useEffect } from "react";
import "../styles/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { TwitterContext } from "../context/TwitterContext";

const Feed = () => {
  const { posts, fetchPosts } = useContext(TwitterContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      {posts.map((post) => (
        <Post
          key={post.id}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
          alt="postImage"
        />
      ))}
    </div>
  );
};

export default Feed;
