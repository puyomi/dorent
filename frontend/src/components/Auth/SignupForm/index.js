import React from "react";

const SignupForm = props => {
  return (
    <div>
      <form>
        <input type="username" placeholder="아이디" />
        <input type="email" placeholder="이메일주소" />
        <input type="password" placeholder="비밀번호1" />
        <input type="password" placeholder="비밀번호2" />
        <input type="tel" placeholder="휴대폰번호" />
        <input type="button" value="로그인" />
      </form>
    </div>
  );
};

export default SignupForm;
