import React from "react";
import styles from "./styles.module.scss";

const MainSlide = props => (
  <div className={styles.container}>
    <form>
      <div className={styles.slideBackground}>
        <input type="submit" className="inputType" value="지금 시작하기" />
      </div>
    </form>
    
  </div>
);

export default MainSlide;
