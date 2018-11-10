import React, { Component } from "react";
import { UploadItem } from "components";
import { actionCreators as itemActions } from "store/modules/item";
import { connect } from "react-redux";

class UploadContainer extends Component {
  state = {
    index_image: "",
    subject: "",
    content: "",
    category_id: "",
    local_basic_id: "",
    local_address: "",
    rent_day_start: "",
    rent_day_end: "",
    cost_per_day: ""
  };

  _handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  _handleSubmit = event => {
    const { uploadItem } = this.props;
    const {
      subject,
      content,
      category_id,
      local_basic_id,
      local_address,
      rent_day_start,
      rent_day_end,
      cost_per_day
    } = this.state;
    event.preventDefault();
    uploadItem(
      subject,
      content,
      category_id,
      local_basic_id,
      local_address,
      rent_day_start,
      rent_day_end,
      cost_per_day
    );
  };

  render() {
    const {
      subject,
      content,
      category_id,
      local_basic_id,
      local_address,
      rent_day_start,
      rent_day_end,
      cost_per_day
    } = this.state;
    const { isLoggedIn } = this.props;
    return (
      <div>
        {isLoggedIn && (
          <UploadItem
            subject_value={subject}
            content_value={content}
            category_id_value={category_id}
            local_basic_id_value={local_basic_id}
            local_address_value={local_address}
            rent_day_start_value={rent_day_start}
            rent_day_end_value={rent_day_end}
            cost_per_day_value={cost_per_day}
            handleInputChange={this._handleInputChange}
            handleSubmit={this._handleSubmit}
          />
        )}
        {!isLoggedIn && "로그인을해주세요!"}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { user } = state;
  return {
    isLoggedIn: user.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadItem: (
      subject,
      content,
      category_id,
      local_basic_id,
      local_address,
      rent_day_start,
      rent_day_end,
      cost_per_day
    ) => {
      dispatch(
        itemActions.uploadItem(
          subject,
          content,
          category_id,
          local_basic_id,
          local_address,
          rent_day_start,
          rent_day_end,
          cost_per_day
        )
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadContainer);
