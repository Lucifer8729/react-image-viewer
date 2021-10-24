import { combineReducers } from "redux";

import images from "./image_reducer";

const appReducer = combineReducers({
  images,
});

export default appReducer;
