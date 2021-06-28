import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../fbase";
import { useHistory } from "react-router";

const Community = ({ userObj }) => {
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
          <Link
            to={{
              pathname: `/community/${post.postId}`,
              state: {
                postKey: post.id,
                title: post.title,
                dates: post.createdAt,
                text: post.text,
                nickname: post.creatorNickname,
                isOwner: userObj ? post.creatorId === userObj.uid : false,
                postId: post.postId,
              },
            }}
          >
            {post.title}
          </Link>
          <h6>{post.createdAt}</h6>
          <h6>{post.creatorNickname}</h6>
        </div>
      ))}
      <button onClick={onWriteClick}>글쓰기</button>
    </>
  );
};

export default Community;
