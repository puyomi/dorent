import React, { Component } from "react";
import Upload from "./presenter";

class Container extends Component {
  state = {
    action: "intro"
  };
  render() {
    const { action } = this.state;
    return <Upload {...this.props} action={action} changeAction={this._changeAction} />;
  }
  _changeAction = () => {
    this.setState({
        action: "upload1"
    });
  };
}

export default Container;
