import { SET_INPUT_FOCUS, SET_INPUT_BLUR } from "./actionTypes";

const defaultState = {
  focused: false,
};

export default (state = defaultState, action) => {
  if (action.type === SET_INPUT_FOCUS) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = true;
    return newState
  }

  if (action.type === SET_INPUT_BLUR) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = false;
    return newState
  }
  return state;
};
