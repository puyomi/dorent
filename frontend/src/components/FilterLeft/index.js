import React from "react";
import styles from "./styles.module.scss";

const FilterLeft = props => (
  <div className={styles.container}>
    <div className={styles.row}>
      <span>Shop / Test Title</span>
    </div>
    <div className={styles.row}>
      <span>title</span>
      <ul>
        <li>category1</li>
        <li>category2</li>
        <li>category3</li>
        <li>category4</li>
        <li>category5</li>
      </ul>
    </div>
    <div className={styles.row}>
      <span>필터</span>
      <span>최소가-최대가</span>
      <span>낮은가격순</span>
      <span>높은가격순</span>
      <span>최근등록물건</span>
    </div>
    <div className={styles.row}>
      <span>정렬하기</span>
      <span>추천순</span>
      <span>낮은가격순</span>
      <span>높은가격순</span>
      <span>최근등록물건</span>
    </div>

    <div className={styles.row}>
      <span>내가 찜한 물건</span>
      <span>HEART</span>
    </div>
  </div>
);

export default FilterLeft;
