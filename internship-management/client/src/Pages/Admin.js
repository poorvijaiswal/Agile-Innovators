import React, { Component } from "react";
import "../App.css";
import BlockA from "../Component/BlockA.js";
import BlockB from "../Component/BlockB.js";
import BlockC from "../Component/BlockC.js";
import Header from "../Component/Header.js";
import { Redirect } from "react-router";

class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("AdminToken");
    let logedIn = true;
    if (token == null) {
      logedIn = false;
    }

    this.state = {
      logedIn,
    };
  }
  render() {
    if (this.state.logedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <Header name={this.props.location.state.fullname} />
        <div className="flex-container">
          <BlockA />
          <BlockB />
          <BlockC />
        </div>
      </>
    );
  }
}

export default Admin;
