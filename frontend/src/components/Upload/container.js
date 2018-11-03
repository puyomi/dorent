import React, { Component } from "react";
import Upload from "./presenter";
import { UploadIntro } from "./presenter";

class Container extends Component {
  state = {
    action: "intro"
  };
  render() {
    const { action } = this.state;
    if (action === "intro") {
      return <UploadIntro changeAction={this._changeAction} />;
    } else if (action === "upload1" && this.props.isLoggedIn) {
      return <Upload />;
    } else {
      return <div>로그인이필요해</div>;
    }
  }
  _changeAction = () => {
    this.setState({
      action: "upload1"
    });
  };
}

export default Container;
