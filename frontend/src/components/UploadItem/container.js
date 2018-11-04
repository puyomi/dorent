import React, { Component } from "react";
import UploadItem from "./presenter";

class Container extends Component {
  render() {
    return <UploadItem {...this.props}/>;
  }
}

export default Container;
