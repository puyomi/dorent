import React, { Component } from "react";
import SignupForm from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
  state = {
    username: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    bankaccount: ""
  };

  static propTypes = {
    createAccount: PropTypes.func.isRequired
  };

  render() {
    const { username, password, name, email, phone, bankaccount } = this.state;
    return (
      <SignupForm
        usernameValue={username}
        passwordValue={password}
        nameValue={name}
        emailValue={email}
        phoneValue={phone}
        bankaccountValue={bankaccount}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
      />
    );
  }
  _handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  _handleSubmit = event => {
    const { createAccount } = this.props;
    const { username, password, name, email, phone, bankaccount } = this.state;
    createAccount(username, password, name, email, phone, bankaccount);
    event.preventDefault();
  };
}

export default Container;
