import React, { useState, useEffect } from "react";
import { db } from "../fbase";
import { useHistory } from "react-router";

const Community = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      const postArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postArray);
    });
  }, []);
  const history = useHistory();
  const onWriteClick = () => {
    history.push("/post");
  };
  return (
    <>
      <div>Community!</div>
      {posts.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
        </div>
      ))}
      <button onClick={onWriteClick}>글쓰기</button>
    </>
  );
};

export default Community;
