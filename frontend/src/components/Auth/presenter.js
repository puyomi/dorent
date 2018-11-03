import React from "react";
import styles from "./styles.module.scss";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";


const Auth = props => {
  return (
    <div className={styles.container}>
      <span>두렌트</span>
      <br />
      <span onClick={props.changeLogin}>로그인</span>
      <span onClick={props.changeSignup}>회원가입</span>
      {props.action === "login" && <LoginForm />}
      {props.action === "signup" && <SignupForm />}
    </div>
  );
};

export default Auth;
