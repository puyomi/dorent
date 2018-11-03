import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Ionicon from "react-ionicons";

const Navigation = props => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.inner}>
        <div className={styles.column}>
          <span className={[styles.item]}>
            <Ionicon icon="md-list-box" />
            전체카테고리
          </span>
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
        </div>
        <div className={styles.column}>
          <Link to="/">
            <img
              className={styles.logo}
              src={require("images/logo.png")}
              alt="Logo이미지"
            />
          </Link>
        </div>
        <div className={styles.column}>
          <Link to="/upload">
            <span className={styles.upload}>
              <Ionicon icon="md-camera" fontSize="18px" />
              물건 등록하기
            </span>
          </Link>

          {props.isLoggedIn ? (
            <Link to="/profile">
              <span className={styles.loginMenu}>
                <Ionicon icon="md-person" fontSize="18px" />
                내정보
              </span>
            </Link>
          ) : (
            <Link to="/auth">
              <span className={styles.loginMenu}>
                <Ionicon icon="md-person" fontSize="18px" />
                로그인
              </span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
