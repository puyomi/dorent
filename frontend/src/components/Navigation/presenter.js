import React from "react";
import styles from "./styles.module.scss";

const Navigation = props => (
  <div className={styles.container}>
    <div className={styles.column}>Logo</div>
    <div className={styles.column}>
      <span>디지털/가전</span>
      <span>의류/패션</span>
      <span>생활/취미</span>
      <span>기타/잡화</span>
    </div>
    <div className={styles.column}>로그인메뉴</div>
  </div>
);
export default Navigation;
