import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import App from "./App";

// Ensure 'root' element exists in the document
const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
