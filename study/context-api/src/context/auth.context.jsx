import { createContext, useState } from "react";

// 1. 만든다
const initailValue = { isLoggedIn: false };
export const AuthContext = createContext({ initailValue });

// 2. 사용
// 멋지게 사용하는 방법
export const useAuth = () => useState(AuthContext);
// 3. 범위를 지정해 값을 내려준다.

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}
