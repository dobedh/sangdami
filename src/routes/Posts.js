import React, { useState } from "react";
import { useHistory } from "react-router";
import { db } from "../fbase";

const Posts = ({ userObj }) => {
  const [newPost, setNewPost] = useState("");
  const [newPosts, setNewPosts] = useState([]);
  const [attachment, setAttachment] = useState(null);
  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    const postObj = {
      text: newPost,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    };
    await db.collection("posts").add(postObj);
    setNewPost("");
    setAttachment("");
    history.push("/community");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewPost(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <textarea
            placeholder="상다미의 이야기"
            onChange={onChange}
            required
          ></textarea>
        </div>
        <div>
          <input type="submit" value="작성완료" />
        </div>
      </form>
    </div>
  );
};

export default Posts;
