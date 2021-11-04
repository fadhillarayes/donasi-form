import { combineReducers } from "redux";
import { quoteReducer } from "./quoteReducer";

const reducers = combineReducers({
  allQuotes: quoteReducer,
});
export default reducers;
