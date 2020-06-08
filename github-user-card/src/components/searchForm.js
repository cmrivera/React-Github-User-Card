import React from "react";
import axios from "axios";

class UserSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      userSearch: "",
    };
  }

  //handle to handle user search change
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      userSearch: e.target.value,
    });
  };

  //handler function to get user searched

  handleSearchUser = () => {
    axios
      .get(`https://api.github.com/users/`)
      //if successful
      .then((res) => {
        return res.json();
      })
      .then((userInfo) => {
        if (userInfo.message === "Not Found")
          this.setState({
            users: [],
            followers: [],
          });
        else {
          this.setState({ users: userInfo });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          id="name"
          value={this.state.userSearch}
          onChange={this.handleChange}
          placeholder="User Name Here"
        />
        <button>Search for user</button>
      </form>
    );
  }
}
export default UserSearch;
