import React from "react";

const Contents = (props) => {
  const { location } = props;
  console.log(location);
  return (
    <>
      <p>{location.state.title}</p>
      <p>{location.state.nickname}</p>
      <p>{location.state.dates}</p>
      <p>{location.state.text}</p>
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
