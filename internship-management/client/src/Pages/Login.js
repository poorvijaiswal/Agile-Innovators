import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Data from "../Data";
import "../App.css";

class Login extends Component {
  //   let isAdminLogin = false;
  //   let isUserLogin = false;

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      fullname: "",
      isUserLogin: false,
      isAdminLogin: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state;

    let isUserExist = Data.find((user) => {
      return user.username === username;
    });

    if (isUserExist) {
      if (password === isUserExist.password && isUserExist.role === "Admin") {
        localStorage.setItem(
          "AdminToken",
          "AsiaToJapanAdminhbchsdbchsdbjcxjcbdshjoeuwyru"
        );
        this.setState({
          isAdminLogin: true,
          fullname: isUserExist.firstName + " " + isUserExist.lastName,
        });
      } else if (
        password === isUserExist.password &&
        isUserExist.role === "User"
      ) {
        localStorage.setItem(
          "UserToken",
          "AsiaToJapanUserhbchsdbchsdbjcxjcbdshjoeuwyru"
        );
        this.setState({
          isUserLogin: true,
          fullname: isUserExist.firstName + " " + isUserExist.lastName,
        });
      } else alert("Wrong Password");
    } else alert("User Not exist");
  }

  render() {
    if (this.state.isAdminLogin)
      return (
        <Redirect
          to={{
            pathname: "/admin",
            state: { fullname: this.state.fullname },
          }}
        />
      );
    else if (this.state.isUserLogin)
      return (
        <Redirect
          to={{
            pathname: "/user",
            state: { fullname: this.state.fullname },
          }}
        />
      );
    return (
      <>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              value={this.state.username}
              placeholder="Enter Username"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Enter Password"
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <button type="submit">Login</button>
          </div>
        </form>

        <div>
          <h3>Admin Credentials:</h3>
          <span>
            username:- <strong>admin@test.com</strong>
          </span>
          <br />
          <span>
            password:- <strong>admin</strong>
          </span>

          <h3>User Credentials:</h3>
          <span>
            username:- <strong>user@test.com</strong>
          </span>
          <br />
          <span>
            password:- <strong>user</strong>
          </span>
        </div>
      </>
    );
  }
}

export default Login;
