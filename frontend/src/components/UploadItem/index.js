import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as itemActions } from "redux/modules/item";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createAccount: (
      index_image,
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
          index_image,
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
  null,
  mapDispatchToProps
)(Container);
