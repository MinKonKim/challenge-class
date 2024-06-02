import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastsProvier } from "./contexts/toasts.context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastsProvier>
      <App />
    </ToastsProvier>
  </React.StrictMode>
);
