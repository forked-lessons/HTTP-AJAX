import React from "react";
import Friend from "./Friend";
import NewFriend from "./NewFriend";

const FriendsList = props => {
  return (
    <div>
      {props.friends.map(friend => (
        <Friend friend={friend} />
      ))}
      <NewFriend friend={props.friend} />
    </div>
  );
};
export default FriendsList;
