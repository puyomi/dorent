import React from "react";
import FilterLeft from "components/FilterLeft";
import TopFilter from "components/TopFilter";
import styles from "./styles.module.scss";

const Digital = props => (
  <div className={styles.container}>
    <div className={styles.inner}>
      <div className={styles.filter}>
        <FilterLeft />
      </div>
      <div className={styles.column}>
        <TopFilter />
        <span>디지털/가전</span>
      </div>
    </div>
  </div>
);

export default Digital;
