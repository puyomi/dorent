import React, { Component } from "react";
import Profile from "./presenter";
import {Redirect}from "react-router-dom"

class Container extends Component {
  
  render() {
    const {isLoggedIn} = this.props;
    if (!isLoggedIn){
      return <Redirect to="/" />
    }
    return <Profile {...this.props}/>;
  }
}

export default Container;
