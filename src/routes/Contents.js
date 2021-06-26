import React from "react";
import { useHistory } from "react-router-dom";
import { db } from "../fbase";

const Contents = (props) => {
  const { location } = props;
  const { state } = location;
  const { title, nickname, dates, text, isOwner, postId } = state;
  const history = useHistory();
  const onDeleteClick = () => {
    const ok = window.confirm("게시글을 지우시겠어요?");
    if (ok) {
      db.doc(`posts/${postId}`).delete();
      //storageService.refFromURL(nweetObj.attachmentURL).delete(); -- 이미지
      history.push("/community");
    }
  };
  const toggleEditing = () => {};
  console.log(isOwner);
  return (
    <>
      <p>{title}</p>
      <p>{nickname}</p>
      <p>{dates}</p>
      <p>{text}</p>
      {isOwner && (
        <>
          <button onClick={onDeleteClick}>삭제</button>
          <button onClick={toggleEditing}>수정</button>
        </>
      )}
    </>
  );
};

export default Contents;

/*    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  } */
