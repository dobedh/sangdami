import { render } from "@testing-library/react";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";
import { authService } from "../fbase";

const Profile = ({ userObj }) => {
  const [editing, setEditing] = useState(false);
  const [newNickname, setNewNickname] = useState(userObj.displayName);
  const history = useHistory();
  const onEditClick = () => {
    setEditing((prev) => !prev);
  };
  const onChangeNickname = (event) => {
    const {
      target: { value },
    } = event;
    setNewNickname(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await userObj
      .updateProfile({
        displayName: newNickname,
      })
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
    setEditing(false);
    Redirect("/profile");
  };

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <div>
      {editing ? (
        <form onSubmit={onSubmit}>
          <div>
            <input
              value={newNickname}
              type="text"
              onChange={onChangeNickname}
              required
            ></input>
          </div>
          <div>
            <input type="submit" value="수정" />
          </div>
        </form>
      ) : (
        <>
          <div>{userObj.email}</div>
          <div>{userObj.displayName}</div>
          <button onClick={onLogOutClick}>로그아웃</button>
          <button onClick={onEditClick}>프로필 수정</button>
        </>
      )}
    </div>
  );
};
export default Profile;
