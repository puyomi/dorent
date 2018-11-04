import React from "react";
import "./styles.module.scss";

const UploadItem = props => (
  <div>
    <span>1. 렌탈물품</span>
    <select type="">
      <option value="대카테고리">대카테고리</option>
      <option value="디지털/가전">디지털/가전</option>
      <option value="의류/패션">의류/패션</option>
      <option value="생활/취미">생활/취미</option>
      <option value="기타/잡화">기타/잡화</option>
    </select>
    <select type="">
      <option value="중카테고리">중카테고리</option>
      <option value="디지털/가전">디지털/가전</option>
      <option value="의류/패션">의류/패션</option>
      <option value="생활/취미">생활/취미</option>
      <option value="기타/잡화">기타/잡화</option>
    </select>
    <select type="">
      <option value="소카테고리">소카테고리</option>
      <option value="디지털/가전">디지털/가전</option>
      <option value="의류/패션">의류/패션</option>
      <option value="생활/취미">생활/취미</option>
      <option value="기타/잡화">기타/잡화</option>
    </select>
    <span>2. 렌탈지역</span>
    <select type="">
      <option value="광역단체">광역단체</option>
      <option value="디지털/가전">디지털/가전</option>
      <option value="의류/패션">의류/패션</option>
      <option value="생활/취미">생활/취미</option>
      <option value="기타/잡화">기타/잡화</option>
    </select>
    <select type="">
      <option value="기초단체">기초단체</option>
      <option value="디지털/가전">디지털/가전</option>
      <option value="의류/패션">의류/패션</option>
      <option value="생활/취미">생활/취미</option>
      <option value="기타/잡화">기타/잡화</option>
    </select>
    <span>3. 렌트기간</span>
    <input type="radio" />
    상시
    <input type="radio" />
    설정
    <span>4. 제목</span>
    <input />
    <span>5. 내용</span>
    <input />
    <span>6. 1일임대료</span>
    <input />
    <span>7. 사진업로드</span>
    <input />
  </div>
);
export default UploadItem;
