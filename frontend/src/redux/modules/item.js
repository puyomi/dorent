// imports

// actions

const ADD_ITEM = "ADD_ITEM";
const SET_FEED = "SET_FEED";
const SET_FEED_DIGITAL = "SET_FEED_DIGITAL";
// action Creators

function addItem() {
  return {
    type: ADD_ITEM
  };
}

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}

function setFeedDigital(feed) {
  return {
    type: SET_FEED_DIGITAL,
    feed
  };
}

// api actions

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
  return (dispatch, getState) => {
    const { token } = getState.user;
    fetch("/products/upload/", {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
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
      .then(response => response.json())
      .then(json => {
        console.log(json);
        if (json.token) {
          dispatch(addItem(json.token));
        }
      })
      .catch(err => console.log(err));
  };
}

// initial state
const initialState = {};

// reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return applyAddItem(state, action);
    case SET_FEED:
      return applySetFeed(state, action);
    // case SET_FEED_DIGITAL:
    //   return applySetFeedDigital(state, action);
    default:
      return state;
  }
}

// reducer function

function applyAddItem(state, action) {}

function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed
  };
}

// exports
const actionCreators = {
  uploadItem
};
export { actionCreators };

// exports reducer
export default reducer;
