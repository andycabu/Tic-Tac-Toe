import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SquareContextProvider } from "./context/SquareContex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SquareContextProvider>
      <App />
    </SquareContextProvider>
  </React.StrictMode>
);
