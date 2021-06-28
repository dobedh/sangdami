import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { db } from "../fbase";

const Contents = (props) => {
  const { location } = props;
  const { state } = location;
  const { title, nickname, dates, text, isOwner, postId, postKey } = state;
  // 위 정보 값이, 새로 고침해도 그대로 쿠키에 남아 있도록 해야함
  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(text);
  const [editing, setEditing] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPost, setNewPost] = useState("");

  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    db.doc(`posts/${postKey}`).update({ title: newPostTitle, text: newPost });
    setEditing(false);
    Redirect(`/community${postId}`);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewPost(value);
    setNewText(value);
  };

  const onChangeTitle = (event) => {
    const {
      target: { value },
    } = event;
    setNewPostTitle(value);
    setNewTitle(value);
  };

  const onDeleteClick = () => {
    const ok = window.confirm("게시글을 지우시겠어요?");
    if (ok) {
      db.doc(`posts/${postKey}`).delete();
      //storageService.refFromURL(nweetObj.attachmentURL).delete(); -- 이미지
      history.push("/community");
    }
  };
  const toggleEditing = () => {
    setNewPostTitle(title);
    setNewPost(text);
    setEditing((prev) => !prev);
  };
  console.log(isOwner);
  return (
    <div>
      {editing ? (
        <form onSubmit={onSubmit}>
          <div>
            <input
              value={newTitle}
              type="text"
              onChange={onChangeTitle}
              required
            ></input>
          </div>
          <div>
            <textarea
              value={newText}
              type="text"
              onChange={onChange}
              required
            ></textarea>
          </div>
          <div>
            <input type="submit" value="수정" />
          </div>
        </form>
      ) : (
        <>
          <p>{newTitle}</p>
          <p>{nickname}</p>
          <p>{dates}</p>
          <p>{newText}</p>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>삭제</button>
              <button onClick={toggleEditing}>수정</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Contents;

/*    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  } */
