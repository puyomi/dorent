import React from "react";
import styles from "./styles.module.scss";

const Upload = props => {
  return (
    <div className={styles.container}>
      <div>업로드창입니당</div>
    </div>
  );
};


export const UploadIntro = props => {
  return (
    <div className={styles.container}>
      <div className={styles.enrollinfo1}>
        <input
          type="submit"
          className="inputType"
          value="지금 시작하기"
          onClick={props.changeAction}
        />
      </div>
      <div className={styles.enrollinfo2} />
      <div className={styles.enrollinfo3}>
        <input
          type="submit"
          className="inputType"
          value="지금 시작하기"
          onClick={props.changeAction}
        />
      </div>
    </div>
  );
};

export default Upload;
