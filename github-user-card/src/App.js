import React from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/userCard";

//import UserCard from "./components/userCard";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: "",
      followers: [],
    };
  }
  componentDidMount() {
    axios.get("https://api.github.com/users/cmrivera").then((res1) => {
      console.log(res1.data);
      axios
        .get(`https://api.github.com/users/cmrivera/followers`)
        .then((res2) => {
          console.log(res2.data);
          this.setState({
            users: res1.data,
            followers: res2.data,
          });
        });
    });
  }
  /*handleChanges = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({ ...this.state, user: e.target.value });
  };*/

  /*fetchUsers = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/cmrivera/followers`)
      .then((res) =>
        this.setState({ ...this.state, followers: res.data.followers_url })
      )
      .catch((err) => console.log(err));
  };
*/
  render() {
    console.log("rendering");
    return (
      <div className="App">
        <h1>Chris's React Github UserCard App</h1>
        <Card
          userImg={this.state.users.avatar_url}
          name={this.state.users.name}
          username={this.state.users.login}
          profile={this.state.users.url}
          followers={this.state.users.followers}
          following={this.state.users.following}
          bio={this.state.users.bio}
        />
        {this.state.followers.map((user) => {
          return (
            <Card
              userImg={user.avatar_url}
              name={user.name}
              username={user.login}
              profile={user.url}
              followers={user.followers}
              following={user.following}
              bio={user.bio}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
