import { combineReducers } from "redux";
import weather from "./weather/index";

const rootReducer = combineReducers({
  weather
});
export default rootReducer;
