import React from "react";
import PropTypes from "prop-types";

const SignupForm = props => {
  return (
    <div>
      <span>두렌트 회원가입</span>
      <span>
        익명 사용자로 인한 피해를 방지하고자 본인인증절차를 거치고 있습니다.
        휴대전화 인증을 통해 본인인증을 해 주시기바랍니다.
      </span>
      <form onSubmit={props.handleSubmit}>
        <input
          name="username"
          type="username"
          placeholder="아이디"
          onChange={props.handleInputChange}
          value={props.usernameValue}
        />
        <input type="button" value="중복확인" />
        <input
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={props.handleInputChange}
          value={props.passwordValue}
        />
        {/* <input
          name="password"
          type="password"
          placeholder="비밀번호재입력"
          onChange={props.handleInputChange}
          value={props.passwordValue}
        /> */}
        <input
          name="name"
          type="name"
          placeholder="이름"
          onChange={props.handleInputChange}
          value={props.nameValue}
        />
        <input
          name="phone"
          type="tel"
          placeholder="휴대폰번호"
          onChange={props.handleInputChange}
          value={props.phoneValue}
        />
        <input type="button" value="본인인증" />
        <input
          name="email"
          type="email"
          placeholder="이메일주소"
          onChange={props.handleInputChange}
          value={props.emailValue}
        />
        <input
          name="bankaccount"
          type="account"
          placeholder="계좌번호"
          onChange={props.handleInputChange}
          value={props.bankaccountValue}
        />
        <span>이용약관*</span>
        <input type="checkbox" />
        <span>이용약관에 동의합니다. 약관 보기 </span>
        <input type="checkbox" />
        <span>개인정보 수집/이용약관에 동의합니다. 약관 보기</span>
        <input type="submit" value="회원가입" />
      </form>
    </div>
  );
};

SignupForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  phoneValue: PropTypes.string.isRequired,
  bankaccountValue: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SignupForm;
