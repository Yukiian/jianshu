import { combineReducers } from "redux-immutable";
import { reduce as headerReducer } from "../common/Header/store";
import { reduce as homeReducer }  from "../pages/home/store";
import { reduce as detailReducer }  from "../pages/detail/store";

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail:detailReducer
});

export default reducer;
