import React from "react";
import styles from "./styles.module.scss";
import { Redirect } from "react-router-dom";

const AuthTemplate = ({ isLoggedIn, changeLogin, changeSignup, children }) => {
  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  } else {
    return (
      <div className={styles.container}>
        <span>두렌트</span>
        <br />
        <span onClick={changeLogin}>로그인</span>
        <span onClick={changeSignup}>회원가입</span>
        {children}
      </div>
    );
  }
};

export default AuthTemplate;
