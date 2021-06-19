import React from "react";
import { useHistory } from "react-router";
import { authService } from "../fbase";

const Profile = () => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Logout</button>
    </>
  );
};
export default Profile;
