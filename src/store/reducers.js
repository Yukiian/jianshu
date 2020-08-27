import { combineReducers } from "redux-immutable";
import { reduce as headerReducer } from "../common/Header/store";
import { reduce as homeReducer }  from "../pages/home/store";

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
});

export default reducer;
