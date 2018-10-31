import React from "react";
import styles from "./styles.module.scss";

const NavAlert = () => {
  return (
    <div className={styles.container}>
      <span className={styles.alert}>
        저희 두렌트가 처음이신가요? 사람들에게 더 저렴하게 대여하거나
        가진물건으로 수익금을 받아보세요. <u>자세히보기</u>
      </span>
    </div>
  );
};

export default NavAlert;
