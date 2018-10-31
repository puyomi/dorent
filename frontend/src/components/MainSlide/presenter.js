import React from "react";
import styles from "./styles.module.scss";

const MainSlide = props => (
  <div className={styles.container}>
    <form>
      <div className={styles.subtitle}>
        <input type="submit" className="inputType" value="지금 시작하기" />
      </div>
    </form>
    <input type="submit" className="inputTypeq" value="시작하기2" />
  </div>
);

export default MainSlide;
