import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Usando o DOM, pega a div com id 'root' para que toda aplicação seja estruturada nela
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
