import { connect } from "react-redux";
import React, { Component } from "react";
import { Navigation, NavAlert } from "components";

class HeaderContainer extends Component {
  render() {
    return [
      <Navigation isLoggedIn={this.props.isLoggedIn} key={2} />,
      <NavAlert key={3} />
    ];
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn
  };
};

export default connect(mapStateToProps)(HeaderContainer);
