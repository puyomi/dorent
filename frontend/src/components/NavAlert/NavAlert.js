import React from "react";
import styles from "./styles.module.scss";
import Ionicon from "react-ionicons";

const NavAlert = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <span className={styles.alert}>저희 두렌트가</span>{" "}
        <span className={styles.red}>처음</span>
        <span className={styles.alert}>
          이신가요? 사람들에게 더 저렴하게 대여하거나 가진물건으로 수익금을
          받아보세요. <u>자세히보기</u>
        </span>
      </div>
      <span className={styles.close}>
        <Ionicon icon="md-close" fontSize="14px" />
      </span>
    </div>
  );
};

export default NavAlert;
