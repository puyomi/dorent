import { createStore, applyMiddleware } from "redux";
import modules from "./modules";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const configure = () => {
  const middlewares = [ReduxThunk];
  const store = createStore(
    modules,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
  return store;
};

export default configure;
