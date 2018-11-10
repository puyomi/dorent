// imports
import axios from "axios";
// actions

const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";

// action creators

function saveToken(token, username) {
  return {
    type: SAVE_TOKEN,
    token,
    username
  };
}

function logout() {
  return {
    type: LOGOUT
  };
}

// API actions
function usernameLogin(username, password) {
  return dispatch => {
    axios("/rest-auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        username,
        password
      })
    })
      .then(response => {
        const { token } = response.data;
        const { username } = response.data.user;
        if (token) {
          dispatch(saveToken(token, username));
        }
      })
      .catch(err => console.log(err));
  };
}

function createAccount(username, password, name, email, phone, bankaccount) {
  return dispatch => {
    axios("/rest-auth/registration/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: JSON.stringify({
        username,
        password1: password,
        password2: password,
        name,
        email,
        phone,
        bankaccount
      })
    })
      .then(response => {
        const { token } = response.data;
        const { username } = response.data.user;
        if (token) {
          dispatch(saveToken(token, username));
        }
      })
      .catch(err => console.log(err));
  };
}

// Initial state

const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt"),
  username: localStorage.getItem("username")
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);
    case LOGOUT:
      return applyLogout(state, action);
    default:
      return state;
  }
}
// reducer function

function applySetToken(state, action) {
  const { token, username } = action;
  localStorage.setItem("jwt", token);
  localStorage.setItem("username", username);
  return {
    ...state,
    isLoggedIn: true,
    token,
    username
  };
}

function applyLogout(state, action) {
  localStorage.removeItem("jwt");
  localStorage.removeItem("username");
  return {
    ...state,
    isLoggedIn: false
  };
}

// exports
const actionCreators = {
  usernameLogin,
  createAccount,
  logout
};

export { actionCreators };

// export reducer
export default reducer;
