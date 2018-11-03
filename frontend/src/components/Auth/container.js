import React, { Component } from "react";
import Auth from "./presenter";
import { Redirect } from "react-router-dom";

class Container extends Component {
  state = {
    action: "login"
  };

  render() {
    const { action } = this.state;
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      return <Redirect to="/profile" />;
    } else {
      return (
        <Auth
          {...this.props}
          action={action}
          changeLogin={this._changeActionLogin}
          changeSignup={this._changeActionSignup}
        />
      );
    }
  }
  _changeActionLogin = () => {
    this.setState({
      action: "login"
    });
  };
  _changeActionSignup = () => {
    this.setState({
      action: "signup"
    });
  };
}

export default Container;
