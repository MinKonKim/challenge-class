import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
const Display = () => {
  const { isLoggedIn } = useContext(AuthContext);
  useEffect(() => {
    console.log(isLoggedIn);
  }, [isLoggedIn]);

  return <div>로그인 여부 ({isLoggedIn.toString()})</div>;
};

export default Display;
