import React, { useContext, useState } from "react";
import { Avatar } from "@mui/material";
import "../styles/TweetBox.css";
import { TwitterContext } from "../context/TwitterContext";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const { addData } = useContext(TwitterContext);

  const sendTweet = (e) => {
    e.preventDefault();
    if (tweetMessage !== "") {
      addData(tweetMessage, tweetImage);
    }

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="inputFields">
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Userimage.png?20181011102003" />
          <input
            value={tweetMessage}
            type="text"
            placeholder="What's happening?"
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="imageInput"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          type="text"
          placeholder="Optional: Enter image URL"
        />
        <button onClick={sendTweet} type="submit" className="btn tweetButton">
          Tweet
        </button>
      </form>
    </div>
  );
};

export default TweetBox;
