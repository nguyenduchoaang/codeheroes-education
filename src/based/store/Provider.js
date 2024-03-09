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

  const getUserInfo = () => {
    var token = Common.GetToken();
    if (token) {
      var decode = jwtDecode(token);
      console.log("decode", decode);

      initState.userInfo = {
        username: decode.sub,
      };
      //    const [err, data] = await UserServices.GetCourseOfUser();
      // if (!err && data) {
      //   initState.courseOfUser = data;
      // } else {
      //   console.log(err);
      // }
    }
  };

  async function getCourseOfUser() {}

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
