import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Nickname = ({ userObj }) => {
  const [nickname, setNickname] = useState("");
  const history = useHistory();

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNickname(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    userObj
      .updateProfile({
        displayName: nickname,
      })
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
    history.push("/");
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="닉네임" onChange={onChange} required />
      <input type="submit" value="완료" />
    </form>
  );
};

export default Nickname;

/*
var user = firebase.auth().currentUser;

user.updateProfile({
  displayName: "Jane Q. User",
  photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
*/

/*    const userInfoObj = {
      nickname,
      userId: userObj.uid,
    };
    await db.collection("userinfo").add(userInfoObj);
    setNickname("");
    history.push("/");*/
