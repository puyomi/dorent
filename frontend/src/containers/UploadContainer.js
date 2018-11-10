import React, { Component } from "react";
import { UploadItem } from "components";
import {actionCreators as itemActions} from "store/modules/item"

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

    event.preventDefault();
  };

  render() {
    return (
      <div>
        <UploadItem />
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
        uploadItem: (username, password) => {
        dispatch(itemActions.uploadItem());
      }
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UploadContainer);
  