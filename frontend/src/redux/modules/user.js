// imports

// actions

const SAVE_TOKEN = "SAVE_TOKEN";

// action creators

function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token
  };
}

// API actions

function usernameLogin(username, password) {
  return function(dispatch) {
    fetch("/rest-auth/login/", {
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
    })
  }
  
}

// Initial state

const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt")
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);
    default:
      return state;
  }
}
// reducer function

function applySetToken(state, action) {
  const { token } = action;
  localStorage.setItem("jwt", token);
  return {
    ...state,
    isLoggedIn: true,
    token
  };
}

// exports
const actionCreators = {
  usernameLogin,
  saveToken
};

export { actionCreators };

// export reducer
export default reducer;
