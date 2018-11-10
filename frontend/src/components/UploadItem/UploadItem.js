import React from "react";

const UploadItem = props => {
  return (
    <div>
      <form encType="multipart/form-data" onSubmit={props.handleSubmit}>
        {/* <input
          name="index_image"
          type="file"
          onChange={props.handleInputChange}
          value={props.index_image_value}
        /> */}
        <input
          name="subject"
          type="text"
          placeholder="subject"
          onChange={props.handleInputChange}
          value={props.subject_value}
        />
        <input
          name="content"
          type="text"
          placeholder="content"
          onChange={props.handleInputChange}
          value={props.content_value}
        />
        <input
          name="category_id"
          type="number"
          placeholder="categoryid"
          onChange={props.handleInputChange}
          value={props.category_id_value}
        />
        <input
          name="local_basic_id"
          type="number"
          placeholder="localid"
          onChange={props.handleInputChange}
          value={props.local_basic_id_value}
        />
        <input
          name="local_address"
          type="text"
          placeholder="local address"
          onChange={props.handleInputChange}
          value={props.local_address_value}
        />
        <input
          name="rent_day_start"
          type="date"
          placeholder="rentdaystart"
          onChange={props.handleInputChange}
          value={props.rent_day_start_value}
        />
        <input
          name="rent_day_end"
          type="date"
          placeholder="rentdayend"
          onChange={props.handleInputChange}
          value={props.rent_day_end_value}
        />
        <input
          name="cost_per_day"
          type="number"
          placeholder="cost per day"
          onChange={props.handleInputChange}
          value={props.cost_per_day_value}
        />
        <input type="submit" value="전송해 제바알!!!" />
      </form>
    </div>
  );
};

export default UploadItem;
