import React from "react";
import { useHistory } from "react-router";
import { authService } from "../fbase";

const Profile = ({ userObj }) => {
  console.log(userObj);
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <div>{userObj.email}</div>
      <button onClick={onLogOutClick}>로그아웃</button>
    </>
  );
};
export default Profile;
