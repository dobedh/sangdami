import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../fbase";
import { useHistory } from "react-router";

const Community = ({ userObj }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        const postArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(postArray);
        console.log(postArray);
      });
  }, []);
  const history = useHistory();
  const onWriteClick = () => {
    if (userObj) {
      history.push("/post");
    } else {
      const ok = window.confirm("로그인해야지 빵구똥꾸!");
      if (ok) {
        history.push("/login");
      }
    }
  };
  return (
    <>
      <button onClick={onWriteClick} class="write-btn">
        글쓰기
      </button>
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
            class="link-posts"
          >
            <div class="post-container">
              <div class="post-title">{post.title}</div>
              <div class="post-date">{post.createdAt}</div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Community;
