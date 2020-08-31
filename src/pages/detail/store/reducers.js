import {fromJS } from 'immutable'
import * as constance from './constance'

const defaultState = fromJS({
  title:'',
  content:''
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constance.CHANGE_DETAIL:
      return state.merge({
        title:action.detail.title,
        content:action.detail.content
      })
    default:
      return state;
  }
};
