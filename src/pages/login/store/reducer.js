import { fromJS } from "immutable";
import * as constance from "./constance";

const defaultState = fromJS({
  login: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constance.CHANGE_LOGIN:
      return state.set("login", action.state);
    case constance.LOG_OUT:
      return state.set("login", action.state);
    default:
      return state;
  }
};
