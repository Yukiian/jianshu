import * as constance from "./constance";
import axios from "axios";

const changeDetail = (detail) => ({
  type: constance.CHANGE_DETAIL,
  detail,
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get("/api/detail.json?id=" + id).then((res) => {
      dispatch(changeDetail(res.data.data));
    });
  };
};
