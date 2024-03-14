import Context from "./Context";
import { useEffect, useReducer, useState } from "react";
import reducer from "./reducer";
import { initState } from "./reducer";
import { jwtDecode } from "jwt-decode";
import Common from "../Common";
import UserServices from "../services/UserServices";
function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    var token = Common.GetToken();
    console.log("123", decode);
    if (token) {
      var decode = jwtDecode(token);
      const userName = decode.sub.username;
      console.log("decode", decode);

      initState.userInfo = {
        username: userName,
      };
      console.log(decode);
      const [err, data] = await UserServices.GetCourseOfUser(userName);
      if (!err && data) {
        console.log("cousre", data);
        initState.listCourse = data;
      } else {
        console.log(err);
      }
    }
  };
  async function getCourseOfUser() {}

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
