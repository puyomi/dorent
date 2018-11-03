import React, { Component } from "react";
import Auth from "./presenter";

class Container extends Component {
  state = {
    action: "login"
  };

  render() {
    const { action } = this.state;
    return (
      <Auth
        action={action}
        changeLogin={this._changeActionLogin}
        changeSignup={this._changeActionSignup}
      />
    );
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
