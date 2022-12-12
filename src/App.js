import React from "react";
import Weather from "./Weather";

import { Audio } from "react-loader-spinner";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
        <Weather city="Maiorca" />
      </header>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}

export default App;
