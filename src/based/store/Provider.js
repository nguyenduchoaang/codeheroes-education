import Context from "./Context";
import { useEffect, useReducer, useState } from "react";
import reducer from "./reducer";
import { initState } from "./reducer";
import { jwtDecode } from "jwt-decode";
import Common from "../Common";
function Provider({ children }) {
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
    }
  };
  console.log(initState);

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}

export default Provider;
