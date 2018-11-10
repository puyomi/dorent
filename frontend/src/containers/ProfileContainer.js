import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators as userActions } from "store/modules/user";
import { Profile } from "components";
import { Redirect } from "react-router-dom";

export class ProfileContainer extends Component {
  render() {
    const { isLoggedIn } = this.props;
    if (isLoggedIn) {
      return <Profile logout={this.props.logout} />;
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(userActions.logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
