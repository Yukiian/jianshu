import { fromJS } from "immutable";
import * as constance from "./constance";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articalPage: 2,
  showScroll: true,
});

const changeHomeData = (state, action) =>
  state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
  });
const articalList = (state, action) =>
  state.merge({
    articleList: state.get("articleList").concat(action.list),
    articalPage: action.nextPage,
  });

export default (state = defaultState, action) => {
  switch (action.type) {
    case constance.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case constance.ADD_ARTICAL_LIST:
      return articalList(state, action);
    case constance.TOGGLE_TOP_SHOW:
      return state.set("showScroll", action.state);
    default:
      return state;
  }
};
