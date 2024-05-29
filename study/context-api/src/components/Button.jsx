import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
const Button = () => {
  const { logIn, logOut } = useContext(AuthContext);
  return (
    <div>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그아웃하기</button>
    </div>
  );
};

export default Button;
