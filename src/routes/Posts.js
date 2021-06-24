import React, { useState } from "react";
import { useHistory } from "react-router";
import { db } from "../fbase";

const Posts = ({ userObj }) => {
  const [postTitle, setPostTitle] = useState("");
  const [newPost, setNewPost] = useState("");
  const [newPosts, setNewPosts] = useState([]);
  const [attachment, setAttachment] = useState(null);
  const history = useHistory();

  const getToday = () => {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    return year + "-" + month + "-" + day;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const postObj = {
      title: postTitle,
      text: newPost,
      createdAt: getToday(),
      creatorId: userObj.uid,
      creatorNickname: userObj.displayName,
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
  const onChangeTitle = (event) => {
    const {
      target: { value },
    } = event;
    setPostTitle(value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input placeholder="제목" onChange={onChangeTitle} required></input>
        </div>
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
