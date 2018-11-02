import React from "react";
import styles from "./styles.module.scss";

const UploadIntro = () => {
  return (
    <div className={styles.container}>
      <form>
        <div className={styles.enrollinfo1}>
          <input type="submit" className="inputType" value="지금 시작하기" />
        </div>
        <div className={styles.enrollinfo2} />
        <div className={styles.enrollinfo3}>
          <input type="submit" className="inputType" value="지금 시작하기" />
        </div>
      </form>
    </div>
  );
};

export default UploadIntro;
