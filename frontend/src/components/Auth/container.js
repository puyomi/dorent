import React, { Component } from "react";
import Auth from "./presenter";

class Container extends Component {
  state = {
    action: "signin"
  };
  render() {
    const { action } = this.state;
    return <Auth action={action} changeAction={this._changeAction} />;
  }
  _changeAction = () => {
    this.setState(prevState => {
      const { action } = prevState;
      if (action === "signin") {
        return {
          action: "signup"
        };
      } else if (action === "signup") {
        return {
          action: "signin"
        };
      }
    });
  };
}

export default Container;
