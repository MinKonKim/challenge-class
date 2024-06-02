import { createContext, useContext, useState } from "react";
import Toast from "../components/Toast";
import Toasts from "../components/Toasts";
// Toast 를 받을 배열이 필요하다
// Toast 를 create , delete가 되야 한다.

const ToastsContext = createContext();
//커스텀 훅
export const useToasts = () => useContext(ToastsContext);

export function ToastsProvier({ children }) {
  const [toasts, setToasts] = useState([]);

  const value = {
    open: (options) => {
      const { id, title, content, delay } = options;
      setToasts((prevToasts) => [
        ...prevToasts,
        <Toast
          key={id}
          id={id}
          title={title}
          content={content}
          delay={delay}
        />,
      ]);
    },

    close: (id) => {
      setToasts((prevToasts) => {
        return prevToasts.filter((toast) => {
          return id !== toast.props.id;
        });
      });
    },
  };

  return (
    <ToastsContext.Provider value={value}>
      {children}
      <Toasts>{toasts.length > 0 && toasts.map((toast) => toast)}</Toasts>
    </ToastsContext.Provider>
  );
}
