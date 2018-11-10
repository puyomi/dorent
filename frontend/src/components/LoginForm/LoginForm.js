import React from "react";
import PropTypes from "prop-types";

const LoginForm = ({
  usernameValue,
  passwordValue,
  handleInputChange,
  handleSubmit
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="username"
          placeholder="아이디를 입력해주세요"
          onChange={handleInputChange}
          value={usernameValue}
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={handleInputChange}
          value={passwordValue}
        />
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default LoginForm;
