import React from "react";
import "./App.css";
import BasicSelect from "./Components/Header/select";
import { Provider } from "./Components/Context/Localization";
import Alert from "./Components/Header/alert";

function App() {
  return (
    <div className="App">
      <Provider>
        <BasicSelect />
        <Alert />
      </Provider>
    </div>
  );
}

export default App;
