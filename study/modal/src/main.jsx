import { ScrollLockProvider } from "@yoojinyoung/usescrolllock";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ModalProvier } from "./contexts/modal.context";
import "./custom.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollLockProvider>
      <ModalProvier>
        <App />
      </ModalProvier>
    </ScrollLockProvider>
  </React.StrictMode>
);
