import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import Todo from "./components/Todo";
import AccordionComponent from "./components/Accordion";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AccordionComponent />
  </React.StrictMode>
);
