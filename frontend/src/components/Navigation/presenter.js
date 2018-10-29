import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Navigation = props => (
  <div className={styles.navigation}>
    <div className={styles.inner}>
      <div className={styles.column}>
        <Link to="/"><img src={require("images/logo.png")} alt="Logo이미지"/></Link>
        <Link to="/digital">
          <span className={styles.item}>디지털/가전</span>
        </Link>
        <Link to="/clothes">
          <span className={styles.item}>의류/패션</span>
        </Link>
        <Link to="/hobby">
          <span className={styles.item}>생활/취미</span>
        </Link>
        <Link to="/etc">
          <span className={styles.item}>기타/잡화</span>
        </Link>
        <Link to="/upload">
          <span className={styles.upload}>물건등록하기</span>
        </Link>
      </div>
      <div className={styles.column}>로그인메뉴</div>
    </div>
  </div>
);
export default Navigation;
