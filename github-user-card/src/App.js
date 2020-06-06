import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    users: [],
    followers: [],
  };

  componentDidMount() {
    console.log("componentDidMount running");
    axios
      .get("https://api.github.com/users/cmrivera")
      .then((res) => {
        console.log(res);
        this.setState({ users: res.data.message });
      })
      .catch((err) => console.log(err));
  }
  handleChanges = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({ ...this.state, followers: e.target.value });
  };

  fetchUsers = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/cmrivera`)
      .then((res) => this.setState({ ...this.state, users: res.data.message }))
      .catch((err) => console.log(err));
  };

  render() {
    console.log("rendering");
    return (
      <div className="App">
        <header className="App-header">
          <h1> Chris's Github UserCard App</h1>
        </header>
        <form onSubmit={this.fetchUsers}>
          <input
            type="text"
            name="users"
            value={this.state.followers}
            onChange={this.handleChanges}
          />
          <button onClick={this.fetchUsers}> Fetch Users</button>
          <div className="users">
            {this.state.followers.map((follower) => (
              <li src={follower} key={follower} />
            ))}
          </div>
        </form>
      </div>
    );
  }
}
export default App;
