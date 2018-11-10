import { connect } from "react-redux";
import React, { Component } from "react";
import { LoginForm, SignupForm, AuthTemplate } from "components";
import { actionCreators as userActions } from "store/modules/user";

class AuthContainer extends Component {
  state = {
    action: "login",
    username: "",
    password: "",
    name: "",
    email: "",
    phone: "",
    bankaccount: ""
  };

  render() {
    const {
      username,
      password,
      action,
      name,
      email,
      phone,
      bankaccount
    } = this.state;
    return (
      <div>
        {/* AuthTemplate에서 로그인여부 판별 */}
        <AuthTemplate
          isLoggedIn={this.props.isLoggedIn}
          changeLogin={this._changeActionLogin}
          changeSignup={this._changeActionSignup}
        >
          {action === "login" && (
            <LoginForm
              usernameValue={username}
              passwordValue={password}
              handleInputChange={this._handleInputChange}
              handleSubmit={this._handleLoginSubmit}
            />
          )}
          {action === "signup" && (
            <SignupForm
              usernameValue={username}
              passwordValue={password}
              nameValue={name}
              emailValue={email}
              phoneValue={phone}
              bankaccountValue={bankaccount}
              handleInputChange={this._handleInputChange}
              handleSubmit={this._handleSignupSubmit}
            />
          )}
        </AuthTemplate>
      </div>
    );
  }

  // 컨테이너 메소드
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

  //인풋체인지
  _handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  //로그인전송
  _handleLoginSubmit = event => {
    const { usernameLogin } = this.props;
    const { username, password } = this.state;
    event.preventDefault();
    usernameLogin(username, password);
  };
  //사인업전송
  _handleSignupSubmit = event => {
    const { createAccount } = this.props;
    const { username, password, name, email, phone, bankaccount } = this.state;
    createAccount(username, password, name, email, phone, bankaccount);
    event.preventDefault();
  };
}

// 상태관리-------------------------------------

const mapStateToProps = state => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    usernameLogin: (username, password) => {
      dispatch(userActions.usernameLogin(username, password));
    },
    createAccount: (username, password, name, email, phone, bankaccount) => {
      dispatch(
        userActions.createAccount(
          username,
          password,
          name,
          email,
          phone,
          bankaccount
        )
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
