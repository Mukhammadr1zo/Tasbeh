import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider as LocalizationProvider } from "./Components/Context/Localization";

ReactDOM.render(
  <React.StrictMode>
    <LocalizationProvider>
      <App />
    </LocalizationProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
