import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const FilterLeft = props => (
  <div className={styles.container}>
    <div className={styles.row}>
      <div>Shop / {props.title}</div>
      <div>{props.title}</div>
      <ul>
        <li>{props.cat1}</li>
        <li>{props.cat2}</li>
        <li>{props.cat3}</li>
        <li>{props.cat4}</li>
        <li>{props.cat5}</li>
      </ul>
    </div>
    <div className={styles.row}>
      <div>추천필터</div>
      <div>브랜드명</div>
      <div>최소가-최대가</div>
      <div>낮은가격순</div>
      <div>높은가격순</div>
      <div>최근등록물건</div>
    </div>
    <div className={styles.row}>
      <div>정렬하기</div>
      <div>추천순</div>
      <div>낮은가격순</div>
      <div>높은가격순</div>
      <div>최근등록물건</div>
    </div>

    <div className={styles.row}>
      <div>내가 찜한 물건</div>
      <div>HEART</div>
    </div>
  </div>
);

FilterLeft.defaultProps = {
  title: "대분류 명",
  cat1: "카테고리1",
  cat2: "카테고리2",
  cat3: "카테고리3",
  cat4: "카테고리4",
  cat5: "카테고리5"
};

FilterLeft.propTypes = {
  title: PropTypes.string.isRequired,
  cat1: PropTypes.string.isRequired,
  cat2: PropTypes.string.isRequired,
  cat3: PropTypes.string.isRequired,
  cat4: PropTypes.string.isRequired,
  cat5: PropTypes.string.isRequired
};

export default FilterLeft;

