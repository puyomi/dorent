import React, { Component } from "react";
import LoginForm from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    usernameLogin: PropTypes.func.isRequired
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <LoginForm
          usernameValue={username}
          passwordValue={password}
          handleInputChange={this._handleInputChange}
          handleSubmit={this._handleSubmit}
        />
      </div>
    );
  }
  _handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  _handleSubmit = event => {
    const { usernameLogin } = this.props;
    const { username, password } = this.state;
    usernameLogin(username, password);
    event.preventDefault();
  };
}

export default Container;
