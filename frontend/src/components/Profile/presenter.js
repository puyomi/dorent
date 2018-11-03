import React from "react";
import "./styles.module.scss";

const Profile = props => <div>
    <span>로그인상태 프로파일페이지</span><br />
    <span onClick={props.logout}>로그아웃!!!!!!!!!!!!!!!</span>
</div>;
export default Profile;
