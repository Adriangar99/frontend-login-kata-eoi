import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./main.css";
import { AppRoutes } from "./navigation/AppRoutes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
);
