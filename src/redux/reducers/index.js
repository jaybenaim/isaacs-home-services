import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import dataReducer from "./dataReducers";
import heroReducers from "./heroReducers";
import calenderReducers from "./calenderReducers";
import reviewReducers from "./reviewReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  data: dataReducer,
  heroes: heroReducers,
  events: calenderReducers,
  reviews: reviewReducers,
});
