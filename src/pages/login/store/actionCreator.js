import * as constance from "./constance";
import axios from "axios";

const changeLogin = () => ({
  type: constance.CHANGE_LOGIN,
  state: true,
});

export const logout = () => ({
  type: constance.LOG_OUT,
  state: false,
});

export const login = (account, password) => {
  return (dispatch) => {
    axios
      .get("/api/login.json?account=" + account + "&password=" + password)
      .then((res) => {
        const result = res.data.data;
        if (result) {
          dispatch(changeLogin());
        } else {
          alert("登陆失败");
        }
      });
  };
};
