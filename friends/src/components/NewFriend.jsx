import React from "react";

const NewFriend = props => {
  return (
    <div>
      <form>
        <input type="text" placeholder="name" value={props.nameInput} />
        <input type="text" placeholder="age" value={props.ageInput} />
        <input type="text" placeholder="email" value={props.emailInput} />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};
export default NewFriend;
