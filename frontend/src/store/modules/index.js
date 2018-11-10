import { combineReducers } from 'redux';
import user from "./user.js"
import item from "./item.js"

export default combineReducers({
    user, item
});