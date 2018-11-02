import React from "react";
import styles from "./styles.module.scss";

const Footer = props => (
  <div className={styles.container}>
    <span>
      회사소개 | 사업자정보확인 ㅣ 개인정보처리방침 | 이용약관
      <br />
      회사명:(주)쉐어랩 주소:서울시 강동구 천호대로 1073,1411호 대표이사:고경민
      <br />
      통신판매업신고:제2015-서울강남-02564호 사업자등록번호:484-81-00847
      <br />
      두렌트는 통신판매 중개자이며 통신판매의 당사자가 아닙니다. 따라서 두렌트는
      상품정보 및 거래에 대해여 책임을 지지 않습니다.
    </span>
    <br />
    <span>Copyright © DORENT.kr | All rights reserved.</span>
  </div>
);
export default Footer;
