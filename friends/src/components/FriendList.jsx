import React from "react";
import Friend from "./Friend";
import NewFriend from "./NewFriend";

class FriendsList extends React.Component {
  constructor(id, name, email, age) {
    super(id, name, age, email);
  }
  // addFriend = e => {
  //   e.preventDefault();
  //   this.props.
  // }
  render() {
    return (
      <div>
        {this.props.friends.map(friend => (
          <Friend friend={friend} />
        ))}
        <NewFriend friend={this.friend} />
      </div>
    );
  }
}
export default FriendsList;
