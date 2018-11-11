import React from "react";

const ItemList = ({ creator, subject, content }) => {
  return (
    <li>
      작성자{creator}, 제목{subject}, 내용{content}
    </li>
  );
};

export default ItemList;
