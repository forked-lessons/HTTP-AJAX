import React, { Component } from "react";
import "./App.css";
import FriendsList from "./components/FriendList";
import { Route } from "react-router-dom";
import axios from "axios";
class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }
  componentDidMount() {
    console.log("CDM now running");

    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }
  render() {
    console.log("rendering App", this.state.friends);

    return (
      <div className="App">
        <h1>Friends App</h1>
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
      </div>
    );
  }
}

export default App;
