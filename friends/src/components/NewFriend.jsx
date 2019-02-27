import React from "react";

const NewFriend = props => {
  return (
    <div>
      <form>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="age" />
        <input type="text" placeholder="email" />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};
export default NewFriend;
