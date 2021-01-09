import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducers from "./usersReducer";
export default combineReducers({
  posts: postReducer,
  users: userReducers,
});
