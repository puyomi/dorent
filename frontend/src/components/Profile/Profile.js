import React from "react";

const Profile = ({ logout }) => {
  return (
    <div>
      로그인성공 프로필페이지입니다. <br />
      <br />
      <br /> <input type="button" onClick={logout} value="로그아웃!"/>
    </div>
  );
};

export default Profile;
