import React from "react";
import styles from "./styles.module.scss";

const Auth = props => {
  return (
    <div className={styles.container}>
      <span onClick={props.changeAction}>두렌트 로그인</span>
      <span>두렌트 회원가입</span>
      {props.action === "signin" ? (
        <LoginForm changeAction={props.changeAction} />
      ) : null}
      {props.action === "signup" ? (
        <RegistrationForm changeAction={props.changeAction} />
      ) : null}
    </div>
  );
};

const LoginForm = props => {
  return (
    <div>
      <form>
        <input type="username" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <input type="button" value="로그인" />
      </form>
    </div>
  );
};

const RegistrationForm = props => {
  return (
    <div>
      <form>
        <input type="username" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호" />
        <input type="button" value="로그인" />
      </form>
    </div>
  );
};

export default Auth;
