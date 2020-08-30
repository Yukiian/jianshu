import axios from "axios";
import * as constance from "./constance";
import { fromJS } from "immutable";

const changeHomeData = (result) => ({
  type: constance.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
});

const addArticalList = (list, nextPage) => ({
  type: constance.ADD_ARTICAL_LIST,
  list: fromJS(list),
  nextPage,
});

export const toggleTopShow = (state) => ({
  type: constance.TOGGLE_TOP_SHOW,
  state
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  };
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get("/api/homeList.json?page=" + page).then((res) => {
      const result = res.data.data;
      dispatch(addArticalList(result, page + 1));
    });
  };
};
