import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import db from "../firebase";

export const TwitterContext = createContext(null);

const collectionRef = collection(db, "posts");

export const TwitterContextProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const addData = async (tweetMessage, tweetImage) => {
    try {
      await addDoc(collectionRef, {
        id: uuidv4(),
        displayName: "Harry Potter",
        username: "@harrypotter",
        verified: true,
        createdAt: serverTimestamp(),
        text: tweetMessage,
        image: tweetImage,
        avatar:
          " //upload.wikimedia.org/wikipedia/commons/e/e0/Userimage.png?20181011102003",
      });
    } catch (e) {
      console.log("error in adding doc", e);
    }

    fetchPosts();
  };

  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collectionRef);
    const fetchedPosts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    fetchedPosts.sort((a, b) => b.createdAt - a.createdAt);

    setPosts(fetchedPosts);
  };

  const contextValue = {
    posts,
    addData,
    fetchPosts,
  };

  return (
    <TwitterContext.Provider value={contextValue}>
      {props.children}
    </TwitterContext.Provider>
  );
};
