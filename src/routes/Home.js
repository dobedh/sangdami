import { render } from "@testing-library/react";
import React, { useState } from "react";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const onWriteClick = () => {
    history.push("/post");
  };
  return (
    <div>
      <h4> 안녕! </h4>
      <button onClick={onWriteClick}>글쓰기</button>
    </div>
  );
};

export default Home;

/*
      <Link exact path to="/post">
        글쓰기
      </Link> */
