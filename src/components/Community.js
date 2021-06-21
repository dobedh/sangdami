import React from "react";
import { useHistory } from "react-router";

const Community = () => {
  const history = useHistory();
  const onWriteClick = () => {
    history.push("/post");
  };
  return (
    <>
      <div>Community!</div>
      <button onClick={onWriteClick}>글쓰기</button>
    </>
  );
};

export default Community;
