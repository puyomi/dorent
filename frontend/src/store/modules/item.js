// imports
import axios from "axios";

const FEED_ITEM = "FEED_ITEM";

function setFeedToState(feed) {
  return {
    type: FEED_ITEM,
    feed
  };
}

function feedItem() {
  return dispatch => {
    axios
      .get("/products/feed/")
      .then(response => {
        const { data } = response;
        dispatch(setFeedToState(data));
      })
      .catch(err => console.log(err));
  };
}

function uploadItem(
  subject,
  content,
  category_id,
  local_basic_id,
  local_address,
  rent_day_start,
  rent_day_end,
  cost_per_day
) {
  return (dispatch, getState) => {
    const {
      user: { token }
    } = getState();
    axios("/products/upload/", {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
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
  const { feed } = action;
  return {
    ...state,
    feed
  };
}

const actionCreators = {
  uploadItem,
  feedItem
};

export { actionCreators };

export default reducer;
