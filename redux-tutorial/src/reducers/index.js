import counterReducer from "./counter";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  //can take the grammar sugar from ESMA6: counterReducer : counterReducer
  isLogged: isLoggedReducer,
  counter: counterReducer
});

export default allReducers;
