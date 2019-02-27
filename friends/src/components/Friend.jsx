import React from "react";

class Friend extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, age, email, id, key } = this.props.friend;
    return (
      <div>
        {name}
        {age}
        {email}
      </div>
    );
  }
}
export default Friend;
