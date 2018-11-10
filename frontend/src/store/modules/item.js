// imports
import axios from "axios";

const FEED_ITEM = "FEED_ITEM";

const uploadItemList = {}
function uploadItem(
  index_image,
  subject,
  content,
  category_id,
  local_basic_id,
  local_address,
  rent_day_start,
  rent_day_end,
  cost_per_day
) {
  return dispatch => {
    axios("/products/upload/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        index_image,
        subject,
        content,
        category_id,
        local_basic_id,
        local_address,
        rent_day_start,
        rent_day_end,
        cost_per_day
      })
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  };
}

const initialState = {
  feed: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FEED_ITEM:
      return applyFeedItem(state, action);
    default:
      return state;
  }
}

function applyFeedItem(state, action) {
  return state;
}

const actionCreators = {
  uploadItem
};

export { actionCreators };

export default reducer;
