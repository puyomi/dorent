import React from "react";

const UploadItem = (props) => {
  return (
    <div>
      <form>
        <input name="index_image" type="file" />
        <input name="subject"type="text" placeholder="subject" />
        <input name="content" type="text" placeholder="content" />
        <input name="category_id" type="number" placeholder="categoryid" />
        <input name="local_basic_id" type="number" placeholder="localid" />
        <input name="local_address" type="text" placeholder="local address" />
        <input name="rent_day_start" type="date" placeholder="rentdaystart" />
        <input name="rent_day_end" type="date" placeholder="rentdayend" />
        <input name="cost_per_day" type="number" placeholder="cost per day" />
        <input type="submit" value="전송해 제바알!!!" />
      </form>
    </div>
  );
};

export default UploadItem;
