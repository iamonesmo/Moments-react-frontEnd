import { combineReducers } from "redux";

import posts from "./posts";

export default combineReducers({
  //imported reducer
  posts: posts,
});
